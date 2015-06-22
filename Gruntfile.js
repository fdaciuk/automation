module.exports = function(grunt) {

  var caRootDirectory = '../ContaAzul';
  var caAppBootPath = caRootDirectory + '/contaazul-app-boot/';
  var jsFiles = caAppBootPath + 'src/main/webapp/app/**/*.js';

  var caAppStaticPath = caRootDirectory + '/contaazul-static/';
  var lessSourcePath = caAppStaticPath + "src/main/webapp/css/";
  var lessFiles = lessSourcePath + '**/*.less';

  grunt.initConfig({

    jshint: {
      options: {
        'laxbreak' : true,
        'laxcomma' : true,
        'scripturl' : true
      },
      ca: [jsFiles]
    },

    less : {
      production : {
        options : {
          compress : true,
          optimization : 2
        },
        files : {
          '../ContaAzul/contaazul-static/target/contaazul-static/css/contaazul.css' : lessSourcePath + 'contaazul.less'
        }
      }
    },

    watch: {
      script: {
        files: [jsFiles],
        tasks: ['jshint']
      },
      style: {
        files: [lessFiles, lessSourcePath + '!contaazul.less'],
        tasks: ['less']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'less']);
};
