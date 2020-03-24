/*global module:true*/
module.exports = function(grunt) {
    grunt.initConfig({
        htmlhint: {
            options: {
                htmlhintrc: '.htmlhintrc'
            },
            src: ['*.html',
                '10-timer-button/*.html',
                '11-password-visual/*.html',
                '12-range/*.html',
                '13-progress/*.html',
                '20-form-validation/*.html',
                '21-h5-validation/*.html',
                '31-echart/*.html',
                '32-map/*.html',
                '33-hightlight/*.html',
                '34-excel/*.html'
            ]
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: ['*.css',
                '10-timer-button/*.css',
                '11-password-visual/*.css',
                '12-range/*.css',
                '13-progress/*.css',
                '20-form-validation/*.css',
                '21-h5-validation/*.css',
                '31-echart/*.css',
                '32-map/*.css',
                '33-hightlight/*.css',
                '34-excel/*.css'
            ]
        },
        eslint: {
            options: {
                eslintrc: '.eslintrc.json'
            },
            target: ['*.js',
                '10-timer-button/*.js',
                '11-password-visual/*.js',
                '12-range/*.js',
                '13-progress/*.js',
                '20-form-validation/*.js',
                '21-h5-validation/*.js',
                '31-echart/*.js',
                '32-map/*.js',
                '33-hightlight/*.js',
                '34-excel/*.js'
            ]
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
                    './dist/progress.html':'13-progress/progress.html',
                    './dist/form-validation.html':'20-form-validation/form-validation.html',
                    './dist/h5-validation.html':'21-h5-validation/h5-validation.html',
                    './dist/echart.html':'31-echart/echart.html',
                    './dist/map.html':'32-map/map.html',
                    './dist/highlight.html':'33-hightlight/highlight.html',
                    './dist/excel.html':'34-excel/excel.html',
                    './dist/timer-button.html':'41-timer-button/timer-button.html',

                    
                }
            }
            
        },
        cssmin: {
            './dist/button.css':'10-timer-button/button.css',
            './dist/password.css':'11-password-visual/password.css',
            './dist/range.css':'12-range/range.css',
            './dist/progress.css':'13-progress/progress.css',
            './dist/form-validation.css':'20-form-validation/form-validation.css',
            './dist/h5-validation.css':'21-h5-validation/h5-validation.css',
            './dist/echart.css':'31-echart/echart.css',
            './dist/map.css':'32-map/map.css',
            './dist/highlight.css':'33-hightlight/highlight.css',
            './dist/excel.css':'34-excel/excel.css',
            './dist/timer-button.css':'41-timer-button/timer-button.css',




        },
        uglify: {
            release:{
                files: {
                    './dist/button.js':'10-timer-button/button.js',
                    './dist/password.js':'11-password-visual/password.js',
                    './dist/range.js':'12-range/range.js',
                    './dist/progress.js':'13-progress/progress.js',
                    './dist/form-validation.js':'20-form-validation/form-validation.js',
                    './dist/h5-validation.js':'21-h5-validation/h5-validation.js',
                    './dist/echart.js':'31-echart/echart.js',
                    './dist/map.js':'32-map/map.js',
                    './dist/highlight.js':'33-hightlight/highlight.js',
                    './dist/excel.js':'34-excel/excel.js',
                    './dist/timer-button.js':'41-timer-button/timer-button.js',

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

    grunt.registerTask('release', ['uglify',  'cssmin', 'htmlmin']);
};