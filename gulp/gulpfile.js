'use strict';

var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var inquirer = require('inquirer');
var paths = require('./paths');
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
      data.JBOSS_PATH = answers.jbossPath;
      data.CA_PATH = answers.caPath;

      fs.writeFile('./automation.json', JSON.stringify(data), function(err) {
        if(err) throw err;
        gulp.start('watch');
      });
  };
}

gulp.task('get-paths', function(done) {
  fs.readFile('./automation.json', function(err, data) {
    if(err) throw err;
    data = JSON.parse(data);
    if(data.JBOSS_PATH && data.CA_PATH)
      return gulp.start('watch');

    inquirer.prompt(questions, questionsAnswered(data));
  });
});

gulp.task( 'watch', [ 'less' ], function() {
  gulp.watch( 'less/**/*.less', [ 'less' ] );
});

gulp.task( 'less', function() {
  gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task( 'default', [ 'get-paths' ]);
