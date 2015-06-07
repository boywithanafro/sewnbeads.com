module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*uglify: {
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }*/

  connect: {
    server: {
      options: {
        hostname: '*',
        keepalive: true,
        port: 9001,
        base: './',
        open: {
                target: 'http://127.0.0.1:9001'
            }
      }
    }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }]
    }
  },

  watch: {
    sass: {
      files: ['css/*.css'],
      tasks: ['cssmin'],
    },
  },

  autoprefixer: {
    options: {
      browsers: ['last 2 versions', 'ie 8', 'ie 9']
    },
    your_target: {
      src: 'css/*.css'
    },
  }

  });

  // Load the plugin that provides the tasks:
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['autoprefixer', 'cssmin', 'watch']);
  grunt.registerTask('convertsass', ['sass']);
  grunt.registerTask('minifycss', ['cssmin']);
  grunt.registerTask('autoprefix', ['autoprefixer']);
  grunt.registerTask('server', ['connect']);

};