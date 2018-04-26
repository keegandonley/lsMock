const lsmock = require('./index.js');
const runner = require('easytestjs');
const test = new runner();
let localStore = new lsmock();

let success = localStore.setItem('test1', 'foobar');
let result = localStore.getItem('test1');

equal(success, true, 'set item using setItem() function');
equal(result, 'foobar', 'set item using setItem() function and verify');

localStore = new lsmock({'foo': 'bar'});
result = localStore.getItem('foo');

equal(result, 'bar', 'set item using constructor');

result = localStore.foo;

equal(result, 'bar', 'get item directly');

result = localStore.getItem('foobar');

equal(result, null, 'return null for an invalid key');

done();