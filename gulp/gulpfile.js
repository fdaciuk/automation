'use strict';

var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var inquirer = require('inquirer');
var path = require('path');
var minifyCss = require('gulp-minify-css');
var paths;
var JBOSS_PATH;
var CA_PATH;

var questions = [{
  type: 'input',
  name: 'jbossPath',
  message: 'Qual o caminho do seu JBOSS?'
},{
  type: 'input',
  name: 'caPath',
  message: 'Qual o caminho do seu ContaAzul?'
}];

function questionsAnswered(data) {
  return function(answers) {
      data.JBOSS_PATH = path.relative( __dirname, answers.jbossPath );
      data.CA_PATH = path.relative( __dirname, answers.caPath );

      fs.writeFile('./automation.json', JSON.stringify(data), function(err) {
        if(err) throw err;
        paths = require('./paths');
        gulp.start('watch');
      });
  };
}

gulp.task('get-paths', function(done) {
  fs.readFile('./automation.json', function(err, data) {
    data = ( data && JSON.parse(data) ) || {};
    if(data.JBOSS_PATH && data.CA_PATH) {
      paths = require('./paths');
      return gulp.start('watch');
    }

    inquirer.prompt(questions, questionsAnswered(data));
  });
});

gulp.task( 'watch', [ 'less' ], function() {
  console.log(paths);
  gulp.watch( paths.cssSrc, [ 'less' ] );
});

gulp.task( 'less', function() {
  gulp.src(paths.contaazulLess)
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task( 'default', [ 'get-paths' ]);
