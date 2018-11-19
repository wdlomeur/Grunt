module.exports = grunt => {
    grunt.initConfig({
        jshint: {
            dist: {
                src:['js/**/*.js']
            }
        },
        concat: {
            scripts: {
                src: [
                        'js/**/*.js',
                        'lib/**/*.js'
                ],
                dest: 'dist/js/scripts.js'
            },
            libs: {
                src: [
                    'lib/angular-animate.min.js',
                    'lib/angular.min.js'
                ],
                dest: 'dist/js/libs.js'
            },
            all: {
                src: [
                    'dist/js/scripts.min.js',
                    'dist/js/libs.min.js'
                ],
                dest: 'dist/js/all.min.js'
            }
        },
        uglify: {
            scripts: {
                src: [
                    'js/**/*.js',
                    'lib/**/*.js'
                ],
                dest: 'dist/js/scripts.min.js'
            }
        },
        cssmin: {
            all: {
                src: ['css/**/*.css'],
                dest: 'dist/css/bootstrap.min.css'
            }
        },
        htmlmin: {
            views: {
                expand: true,
                cwd: 'view/',
                src: ['*.html'],
                dest: 'dist/view'
            },
            options: {
                removeComments: true,
                collapseWhitespace: true
              },
        },
        clean: {
            temp: ['dist/js/libs.js', 'dist/js/scripts.js', 'dist/js/libs.min.js', 'dist/js/scripts.min.js'],
            all: ['dist/']
        },
        copy: {
            all: {
                src: 'index-prod.html',
                dest: 'dist/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('desenv', ['clean:all', 'jshint', 'concat:scripts', 'uglify', 'concat:libs', 'concat:all', 'cssmin', 'htmlmin', 'clean:temp', 'copy']);
};