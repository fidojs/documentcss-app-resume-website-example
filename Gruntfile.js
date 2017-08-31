'use strict';

module.exports = function( grunt ) {

  //
  // Show elapsed time at the end
  //

  require('time-grunt')(grunt);

  //
  // Load all grunt tasks
  //

  require('load-grunt-tasks')(grunt);

  //
  // Initialize configuration
  //

  // NOTE: Grunt reload stuff is not used (or needed) with documentCSS.app
  
  var reloadPort = 35729;
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,
    watch: {
      options: {
        livereload: reloadPort
      },
      sass: {
        files: pkg['config']['sassPattern'],
        tasks: [ 'compass' ],
        options: { livereload: reloadPort }
      },
      jade: {
        files: pkg['config']['jadePattern'],
        tasks: ['jade'],
        options: { livereload: reloadPort }
      }
    },
    clean: {
      dist: [
        'assets/css/style.css',
        'index.html'
      ]
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'index.html': ['index.jade']
        }
      }
    }
  });

  //
  // Main tasks
  //

  grunt.registerTask(
    'default', [
      'watch'
    ]);

  grunt.registerTask(
    'dist', [
      'clean',
      'compass',
      'jade'
    ]);
};

