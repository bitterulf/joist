module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      vendor: {
        src: ['lib/index.js'],
        dest: 'browser/joist.js',
        options: {
          browserifyOptions: {
            standalone: 'Joist'
          }
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> version <%= pkg.version %> by <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'browser/<%= pkg.name %>.js',
        dest: 'browser/<%= pkg.name %>.min.js'
      }
    },
    clean: ['browser/joist.js']
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['browserify', 'uglify', 'clean']);

};
