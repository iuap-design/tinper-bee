var file = require('html-wiring');
var pkg = JSON.parse(file.readFileAsString('package.json'));
var components = Object.keys(pkg.dependencies).filter(function (item) {
  return /bee/.test(item);
});
var _ = require('lodash');
var expect = require('expect.js');

var tinperBee = require('../build/tinper-bee');

console.log(tinperBee);

describe('bundle', function () {
  it('all tinper-bee devDependencies should be included', function (done) {
    var pass = true;
    components.forEach(function check(item) {
      var componentName = _.capitalize(_.camelCase(item.split('-').slice(1).join('-')));
      console.log(typeof tinperBee[componentName]);
      pass = typeof tinperBee[componentName] === 'object';
    });
    expect(pass).to.be(true);
    done();
  });
});
