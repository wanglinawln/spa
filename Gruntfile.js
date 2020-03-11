/*global module:true*/
module.exports = function(grunt) {
    grunt.initConfig({
        htmlhint: {
            options: {
                htmlhintrc: '.htmlhintrc'
            },
            src: ['*.html','10-timer-button/*.html','11-password-visual/*.html','12-range/*.html','13-progress/*.html']
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: ['*.css','10-timer-button/*.css','11-password-visual/*.css','12-range/*.css','13-progress/*.css']
        },
        eslint: {
            options: {
                eslintrc: '.eslintrc.json'
            },
            target: ['*.js','10-timer-button/*.js','11-password-visual/*.js','12-range/*.js','13-progress/*.js']
        },
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            release:{
                files: {
                    './dist/button.html':'10-timer-button/button.html',
                    './dist/password.html':'11-password-visual/password.html',
                    './dist/range.html':'12-range/range.html',
                    './dist/progress.html':'13-progress/progress.html'
                }
            }
            
        },
        cssmin: {
            './dist/button.css':'10-timer-button/button.css',
            './dist/password.css':'11-password-visual/password.css',
            './dist/range.css':'12-range/range.css',
            './dist/progress.css':'13-progress/progress.css'

        },
        uglify: {
            release:{
                files: {
                    './dist/button.js':'10-timer-button/button.js',
                    './dist/password.js':'11-password-visual/password.js',
                    './dist/range.js':'12-range/range.js',
                    './dist/progress.js':'13-progress/progress.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');



    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('release', ['uglify',  'cssmin', 'htmlmin']);
};