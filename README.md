<img src="http://tinper.org/assets/images/bee.png" width="120" />

# tinper-bee


[![npm version](https://img.shields.io/npm/v/tinper-bee.svg)](https://www.npmjs.com/package/tinper-bee)
[![Build Status](https://img.shields.io/travis/iuap-design/tinper-bee/master.svg)](https://travis-ci.org/iuap-design/tinper-bee)
[![Coverage Status](https://coveralls.io/repos/github/iuap-design/tinper-bee/badge.svg?branch=master)](https://coveralls.io/github/iuap-design/tinper-bee?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/tinper-bee.svg?style=flat)](https://npmjs.org/package/tinper-bee)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/iuap-design/tinper-bee.svg)](http://isitmaintained.com/project/iuap-design/tinper-bee "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/iuap-design/tinper-bee.svg)](http://isitmaintained.com/project/iuap-design/tinper-bee "Percentage of issues still open")


## Introduction

[tinper-bee](http://bee.tinper.org/)is a component library based on the `UI` design language` iUAP Design` and `React`, providing developers with a complete ecosystem from product interface design to front-end development.

[中文](README_CN.md)

## Features

- It is a set of high quality UI components and based on IUAP DESIGN.
- Document complete and easy to use.
- A rich set of enterprise-class features
- Support for component extensions and customizations.


## Quickstart


### Install

- npm

```
npm install --save tinper-bee
```

- From github
```
git clone git@github.com:iuap-design/tinper-bee.git
```

- CDN
```
```

### use

```
import { Button } from 'tinper-bee';

ReactDOM.render(<Button />, mountNode);

```


### Version

0.1.7。


### Directory Description

```
/
│
├─assets
│      base.css
│      component.css
│
├─build
│      tinper-bee.js
│      tinper-bee.min.js
│
└─


```

### Document

[website](http://bee.tinper.org/)

[Develop documentation](https://github.com/iuap-design/tinper-bee/docs)。

[Compatible ie8](https://github.com/iuap-design/neoui-react/blob/master/docs/react-ie8.md)。

[tinper-bee components organization](https://github.com/tinper-bee)


### Participate

Such as in the course of any problems encountered，submit [issues](https://github.com/iuap-design/tinper-bee/issues),

or pull request。

There are urgent problems can be directly mail to me（Email：guoyff@yonyou.com）


## Develop

Developers can participate in contributing code for the tinper-bee, but also can be based on tinper-bee secondary development or packaging plug-ins.

[tinper-bee components organization](https://github.com/tinper-bee)

### Directory Structure

```
bower.json
CHANGELOG.md
CONTRIBUTING.md
build/
assets/
docs/
gulpfile.js
package.json
README.md
style/
tests/
webpack.conf.js
```

### Tools

tinper-bee use [gulp.js](http://gulpjs.com/) and [webpack](https://webpack.github.io/) build the project.

clone:

```
$ git clone git@github.com:iuap-design/tinper-bee.git
```

install：

```
$ cd tinper-bee && npm install
```

build：

```
$ gulp
```


## Feedback

[Bug Feedback and Request Submission](CONTRIBUTING.md)

## Licence

MIT.
