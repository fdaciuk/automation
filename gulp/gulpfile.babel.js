'use strict';

import fs from 'fs';
import gulp from 'gulp';
import less from 'gulp-less';
import inquirer from 'inquirer';
import path from 'path';
import minifyCss from 'gulp-minify-css';
let paths;
let JBOSS_PATH;
let CA_PATH;

const questions = [{
  type: 'input',
  name: 'jbossPath',
  message: 'Qual o caminho do seu JBOSS?'
},{
  type: 'input',
  name: 'caPath',
  message: 'Qual o caminho do seu ContaAzul?'
}];

gulp.task('get-paths', done => {
  fs.readFile('./automation.json', function(err, data) {
    data = ( data && JSON.parse(data) ) || {};
    if(data.JBOSS_PATH && data.CA_PATH) {
      paths = require('./paths');
      return gulp.start('watch');
    }

    inquirer.prompt(questions, questionsAnswered(data));
  });
});

gulp.task('watch', [ 'less' ], () => {
  console.log(paths);
  gulp.watch( paths.cssSrc, [ 'less' ] );
  gulp.watch( paths.jsSrc, [ 'js' ] );
  gulp.watch( paths.htmlSrc, [ 'html' ] );
});

gulp.task('less', () => {
  gulp.src(paths.contaazulLess)
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task('js', () => {
  compileAppBoot(paths.jsSrc);
});

gulp.task('html', () => {
  compileAppBoot(paths.htmlSrc);
});

gulp.task( 'default', [ 'get-paths' ]);

function questionsAnswered(data) {
  return answers => {
      data.JBOSS_PATH = path.relative( __dirname, answers.jbossPath );
      data.CA_PATH = path.relative( __dirname, answers.caPath );

      fs.writeFile('./automation.json', JSON.stringify(data), err => {
        if(err) throw err;
        paths = require('./paths');
        gulp.start('watch');
      });
  };
}

function compileAppBoot( src ) {
  gulp.src(src, { base: paths.appBootSrcBase })
    .pipe(gulp.dest(paths.appBootDest));
}
