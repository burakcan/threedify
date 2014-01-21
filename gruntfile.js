module.exports = function(grunt) {

  grunt.initConfig({
    coffee: {
      compile: {
        options : {
          sourceMap : true,
          bare : true
        },
        files: {
          'app/app.js': 'dev/*.coffee'
        }
      }
    },

    stylus : {
      compile : {
        options: {
          'include css' : true
        },
        files : {
          'app/style.css' : 'dev/*.styl'
        }
      }
    },

    watch : {
      scripts : {
        files : ['dev/*.coffee', 'dev/*.styl'],
        tasks : ['coffee', 'stylus']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['coffee', 'stylus','watch']);
}
