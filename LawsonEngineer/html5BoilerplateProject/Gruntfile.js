module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     build: {
        //         src: 'src/<%= pkg.name %>.js',
        //         dest: 'build/<%= pkg.name %>.min.js'
        //     }
        // }

        copy : {
            boostrap : {
                files : [
                    {
                        expand : true,
                        nonull: true,
                        dest   : '',
                        cwd     : 'node_modules/bootstrap/dist/',
                        src    : [
                            '**/*.min.js',
                            '**/*.min.css',
                            '**/*.css.map',
                            '**/fonts/**'
                        ]
                    }
                ]
            },
            jquery : {
                files : [
                    {
                        expand : true,
                        nonull: true,
                        dest   : 'js/',
                        cwd     : 'node_modules/jquery/dist/',
                        src    : [
                            'core.js',
                            '**/*.min.js',
                            '**/*.min.map',
                        ]
                    }
                ]
            }
        } ,

        copyJquery : {
            foo : {
                files : [
                    {
                        expand : true,
                        dest   : 'dist',
                        cwd    : 'src',
                        src    : [
                            '**/*.js'
                        ]
                    }
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);


    grunt.registerTask('build', function(target) {
        grunt.task.run('copy');
        //grunt.task.run('copyJquery');
    });

};
