module.exports = function(grunt){
    grunt.initConfig({
        concat: {
            './concat/js/concated.js' : [
                'js/0*.js',
                'js/1*.js',
                'js/3*.js',
                'js/4*.js',
                'js/5*.js',
                'js/6*.js',
                'js/7*.js'
            ]
        },
        watch: {

            'static' : {

                files: [
                    'js/0*.js',
                    'js/1*.js',
                    'js/3*.js',
                    'js/4*.js',
                    'js/5*.js',
                    'js/6*.js',
                    'js/7*.js',
                    'css/sample.css'

                ],
                tasks: [
                        'concat',
                        'uglify',
                        'cssmin'
                ]
            }

        },
        uglify: {
            build: {
                src: './concat/js/concated.js',
                dest: 'build/sample.js'
            }
        },
        cssmin : {
            'build/sample.css' : [
                './concated.css'
            ]
        },
        /*imageoptim: {


            // these paths should match directories
            files: [
                'img/sprite/',
                'img/sprite/'
            ],
            options: {
                // also run images through ImageAlpha.app before ImageOptim.app
                imageAlpha: true,


                quitAfter: true
            }

        }*/

    });

    //jenkins用タスク(タスク名がjenkins , 配列内が実行タスク)
    grunt.task.registerTask('jenkins',['concat' ,'uglify']);
    //grunt.task.registerTask('minSprite',['imageoptim']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-imageoptim');


};
