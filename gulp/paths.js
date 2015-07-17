var path = require('path');
var automation = require('./automation.json');

var paths = {
  appStatic: path.resolve(automation.CA_PATH, '/contaazul-app-static'),
  appBoot: path.resolve(automation.CA_PATH, '/contaazul-app-boot')
};

paths.cssSrc = path.resolve(paths.appStatic, '/src/main/webapp/css/**/*.less');
paths.cssDest = path.resolve(automation.JBOSS_PATH, '/standalone/deployments/contaazul-static.war/css');
paths.jsSrc = path.resolve(paths.appBoot, '/src/main/webapp/app/**/*.js');
paths.jsDest = path.resolve(automation.JBOSS_PATH, '/standalone/deployments/contaazul-app-boot.war/src/main/webapp/app');

module.exports = paths;
