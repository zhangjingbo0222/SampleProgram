module.exports = function (grunt) {
    grunt.initConfig({
        // package.jsonファイル内のプロパティの値を参照する
        pkg: grunt.file.readJSON('package.json'),
        // 各タスクの構成を定義
        // package.json の scripts から "grunt cssmin" などで呼び出せる。
        copy: {
            bundle: {
                files: [
                    {
                        expand: true, src: ['**'],
                        cwd: 'node_modules/jquery/dist/',
                        dest: 'wwwroot/lib/jquery/dist/'
                    },
                    {
                        expand: true, src: ['**'],
                        cwd: 'node_modules/jquery-validation/dist/',
                        dest: 'wwwroot/lib/jquery-validation/dist/'
                    },
                    {
                        expand: true, src: ['**'],
                        cwd: 'node_modules/jquery-validation-unobtrusive/dist/', 
                        dest: 'wwwroot/lib/jquery-validation-unobtrusive/dist/'
                    },
                    {
                        expand: true, src: ['**'],
                        cwd: 'node_modules/bootstrap/dist/',
                        dest: 'wwwroot/lib/bootstrap/dist/'
                    },
                    {
                        expand: true, src: ['**'],
                        cwd: 'node_modules/font-awesome/css/',
                        dest: 'wwwroot/lib/font-awesome/css/'
                    },
                    {
                        expand: true, src: ['**'],
                        cwd: 'node_modules/font-awesome/fonts/',
                        dest: 'wwwroot/fonts/'
                    }
                ]
            }
        }
    });
    // 必要なGruntプラグインを読み込む。
    grunt.loadNpmTasks('grunt-contrib-copy');
    // 各タスクを組合せたカスタム タスクを登録する。
    // package.json の scripts から "grunt bundle" で呼び出せる。
    grunt.registerTask('bundle', ['copy']);
};