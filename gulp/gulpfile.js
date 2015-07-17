'use strict';

var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var inquirer = require('inquirer');
var JBOSS_PATH;
var CA_PATH;

var questions = [{
  type: 'input',
  name: 'jbossPath',
  message: 'Qual o caminho do seu JBOSS?'
},{
  type: 'input',
  name: 'contaAzulPath',
  message: 'Qual o caminho do seu ContaAzul?'
}];

function callback(answers) {
  console.log(answers.jbossPath, answers.contaAzulPath);
  gulp.start('watch');
}

gulp.task('get-paths', function(done) {
  inquirer.prompt(questions, callback);
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
