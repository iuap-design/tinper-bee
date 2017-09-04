var file = require('html-wiring');
var pkg = JSON.parse(file.readFileAsString('package.json'));

var components = Object.keys(pkg.devDependencies).filter(function (item) {
    if(item == 'bee-layout'){
        return 'bee-con';
    }
  return /^bee-/.test(item);
});
var _ = require('lodash');
var expect = require('expect.js');

var tinperBee = require('../build/tinper-bee');


describe('bundle', function () {
  it('all tinper-bee devDependencies should be included', function (done) {
    var pass = true;
    components.forEach(function check(item) {
      var component= _.camelCase(item.split('-').slice(1).join('-'));
      var componentName = component.charAt(0).toUpperCase() + component.slice(1);
      console.log(componentName);
      pass = (typeof tinperBee[componentName] === 'object' || typeof tinperBee[componentName] === 'function');
    });
    expect(pass).to.be(true);
    done();
  });
});
