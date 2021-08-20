const shell = require('shelljs');

console.log('ola mundo');

shell.exec('git diff --name-only branch-scripts-tests..main');
