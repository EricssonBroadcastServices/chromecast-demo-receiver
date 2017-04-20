import { gruntCustomizer, gruntOptionsMaker } from './options-customizer.js';
module.exports = function(grunt) {
  require('time-grunt')(grunt);

  let _ = require('lodash-compat');
  let pkg = grunt.file.readJSON('package.json');
  let versionParts = pkg.version.split('.');
  let version = {
    full: pkg.version,
    major: versionParts[0],
    minor: versionParts[1],
    patch: versionParts[2]
  };

  version.majorMinor = '${version.major}.${version.minor}';

  const browserifyGruntDefaults = {
    browserifyOptions: {
      debug: true,
      standalone: 'emp-receiver-app'
    },
    plugin: [
      ['browserify-derequire']
    ],
    transform: [
      require('babelify').configure({
        sourceMapRelative: './',
        loose: ['all']
      }),
      ['browserify-versionify', {
        placeholder: '__VERSION__',
        version: pkg.version
      }],
      ['browserify-versionify', {
        placeholder: '__VERSION_NO_PATCH__',
        version: version.majorMinor
      }]
    ]
  };

  const browserifyGruntCustomizer = gruntCustomizer;
  const browserifyGruntOptions = gruntOptionsMaker(browserifyGruntDefaults, browserifyGruntCustomizer);

  grunt.initConfig({
    pkg,
    clean: {
        build: ['build/temp/*'],
        dist: ['dist/*']
    },
    browserify: {
      options: browserifyGruntOptions(),
      build: {
        files: {
          'build/temp/emp-receiver-app.js': ['app/js/emp-receiver-app.js']
        }
      }
    },
    uglify: {
      build: {
        options: {
          preserveComments: false,
          mangle: true,
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          }
        },
        files: {
          'dist/js/emp-receiver-app.min.js': 'build/temp/emp-receiver-app.js'
        }
      }
    },
    copy: {
      build:    {
        files: [
          { cwd: 'app/images/', src: ['*.*'], dest: 'dist/images', expand: true, filter: 'isFile'  },
          { cwd: 'app/', src: ['index.html'], dest: 'dist', expand: true, filter: 'isFile' },
          { cwd: 'app/css/', src: ['video-js.css'], dest: 'dist/css', expand: true, filter: 'isFile' }
        ]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'build/temp/',
        src: ['emp-receiver.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      },
    },
    sass: {
      build: {
        files: {
          'build/temp/emp-receiver.css': 'app/css/emp-receiver.scss',
        }
      }
    },
    ftp_push: {
      stage: {
        options: {
          authKey: "chromecast-azure-stage",
          host: "waws-prod-am2-121.ftp.azurewebsites.windows.net",
          dest: "/site/wwwroot/chromecast-demo-receiver/stage/",
          port: 21
        },
        files: [
          { expand: true, cwd: 'dist/', src: ['**/*'] }
        ]
      }
    }
  });

  // load all the npm grunt tasks
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('chg');
  grunt.loadNpmTasks('grunt-ftp-push');

  grunt.registerTask('build', [
    'clean:build',
    'browserify:build',
    'uglify:build',
    'sass:build',
    'cssmin:minify',
    'copy:build'
  ]);



  grunt.registerTask('default', ['build']);
  grunt.registerTask('cloud:stage', ['build', 'ftp_push']);
  grunt.loadTasks('build/tasks');
};
