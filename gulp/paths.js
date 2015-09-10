import path from 'path';
import automation from './automation.json';

let paths = {
  appStatic: path.normalize(automation.CA_PATH + '/contaazul-static'),
  appBoot: path.normalize(automation.CA_PATH + '/contaazul-app-boot')
};

paths.cssSrc = path.normalize(paths.appStatic + '/src/main/webapp/css/**/*.less');
paths.contaazulLess = path.normalize(paths.appStatic + '/src/main/webapp/css/contaazul.less');
paths.cssDest = path.normalize(automation.JBOSS_PATH + '/standalone/deployments/contaazul-static.war/css');
paths.jsSrc = path.normalize(paths.appBoot + '/src/main/webapp/app/**/*.js');
paths.htmlSrc = path.normalize(paths.appBoot + '/src/main/webapp/app/**/*.html');
paths.appBootSrcBase = path.normalize(paths.appBoot + '/src/main/webapp/app');
paths.appBootDest = path.normalize(automation.JBOSS_PATH + '/standalone/deployments/contaazul-app.ear/contaazul-app-boot.war/app');

export default paths;
