# lsMock

Simple library used to mock out localStorage with full functionality for use in test environments or other situations where localStorage is not supported.

### Setup

Install:
```js
npm i --save lsmock
```

Include:
```js
const mock = require('lsmock');
```
or 
```js
import mock from 'lsmock';
```
### Usage

```js
let localStorage = new lsmock();

localStorage.setItem("foo", "bar");

const test = localStorage.getItem("foo");
```

As with the web API, you can also access elements directly:

```js
const test = localStorage.foo;
```

In the case where your tests expect localStorage to be in some initial state, that can be set as well:

```js
let localStorage = new lsmock({
	"foo": "bar",
	"hello": "world"
});

console.log(localStorage.getItem("hello"));
```
