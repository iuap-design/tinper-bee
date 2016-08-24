[中文 README](#cn-make-your-react-app-work-in-ie8)

# Make your React app work in IE8

> It's really a dispiriting news that [Starting with React v15, we're discontinuing React DOM's support for IE 8][Discontinuing IE 8 Support in React DOM]. There are still [more than 18% people who are using IE8 in China][IE8-in-China].
>
> Anyway, `react-ie8` will continuously provide a series of [Examples] for people who are facing the same compatible problems, as well as collecting issues.
>
> Have fun with `react-ie8` [Examples], and feel free to [Open an issue].

## How to

First you shouldn't use React v15 or higher version anymore. Just use React v0.14 which still support IE8.

If you need docs for React v0.14, go to http://react-ie8.xcatliu.com

### Using CommonJS

I highly recommend to use CommonJS style to include required packages.

First install these packages:

```shell
npm install --save es5-shim console-polyfill
```

Then insert the code *into the beginning of your entry file*:

```js
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
```

See [React IE8 Hello World Example][Hello World] for a real example.

### Other Problems

Some problems are actually not the problem of `React`, but I also list them below:

Error Message | Reason | Solution | Related Issue | Example
------------- | ------ | -------- | ------------- | -------
`Expected identifier` | Reserved words such as `default` are used in your code or in third party packages | Use [es3ify] or [es3ify-loader] to transform your code | [#1] | [Fetch IE8]
`Exception thrown and not caught` | Babel transforms your `export * from 'xxx'` to `Object.defineProperty` which doesn't support accessor property in IE8 | Insert `require('es5-shim')` `require('es5-shim/es5-sham')` in the top of your entry file, and DONOT use `export * from 'xxx'` in your code | [#2][#2] [#32][#32] | [Hello World]
`Object expected` | Perhaps you are using `fetch` without polyfilled | Use `es6-promise` and `fetch-ie8` to polyfill `fetch` | [#4] | [Fetch IE8]
`'Promise' is undefined` | `Promise` need to be polyfilled in IE8 | Use `es6-promise` to polyfill `Promise` | [#5] | [Fetch IE8]
`Object doesn't support this property or method` | Perhaps you are using `Object.assign` | Use `core-js` to polyfill | [#7] | [Object Assign]
`'JSON' is undefined` | Need to use IE8 Standards Mode | Add `<!DOCTYPE html>` and `<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>` | [#8] | [Hello World]
