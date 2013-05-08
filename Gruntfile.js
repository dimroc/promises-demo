module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    regarde: {
      livereload: {
        files: [ 'www/*.js', 'www/*.html' ],
        tasks: ['livereload']
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'www'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', [
                     'livereload-start',
                     'connect',
                     'regarde'
  ]);
};
