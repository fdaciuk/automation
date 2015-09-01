var path = require('path');
var automation = require('./automation.json');

var paths = {
  appStatic: path.normalize(automation.CA_PATH + '/contaazul-static'),
  appBoot: path.normalize(automation.CA_PATH + '/contaazul-app-boot')
};

paths.cssSrc = path.normalize(paths.appStatic + '/src/main/webapp/css/**/*.less');
paths.contaazulLess = path.normalize(paths.appStatic + '/src/main/webapp/css/contaazul.less');
paths.cssDest = path.normalize(automation.JBOSS_PATH + '/standalone/deployments/contaazul-static.war/css');
paths.jsSrc = path.normalize(paths.appBoot + '/src/main/webapp/app/**/*.js');
paths.jsDest = path.normalize(automation.JBOSS_PATH + '/standalone/deployments/contaazul-app.ear/contaazul-app-boot.war/app');
paths.htmlSrc = path.normalize(paths.appBoot + '/src/main/webapp/app/**/*.html');
paths.htmlSrcBase = path.normalize(paths.appBoot + '/src/main/webapp/app');
paths.htmlDest = path.normalize(automation.JBOSS_PATH + '/standalone/deployments/contaazul-app.ear/contaazul-app-boot.war/app');

module.exports = paths;
