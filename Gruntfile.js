module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/*.js'
                ],
                dest: 'js/build/production.js'
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        compass: {
            dist: {
              options: {
                sassDir: 'css/sass',
                cssDir: 'css',
                environment: 'production'
              }
            }
        },

        jekyll: {
            prod : {
                options: {
                    serve : true,
                    server_port : 4000,
                    watch : true,
                    // drafts : true
                }
            },
            dev : {
                options: {
                    serve : true,
                    server_port : 4000,
                    watch : true,
                    drafts : true
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['css/sass/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            },
            options : {
                spawn : false,
                atBegin : true
            }
        },

        concurrent: {
            prod : {
              tasks: ['watch', 'jekyll:prod'],
              options: {
                logConcurrentOutput: true
              }
            },
            dev : {
              tasks: ['watch', 'jekyll:dev'],
              options: {
                logConcurrentOutput: true
              }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-concurrent');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concurrent:prod']);
    grunt.registerTask('dev', ['concurrent:dev']);

};