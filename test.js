const lsmock = require('./index.js');

console.log('\n🎉 Running basic tests of lsmock\n');
const testRes = {pass: 0, fail: 0};

let localStore = new lsmock();

let success = localStore.setItem('test1', 'foobar');
let result = localStore.getItem('test1');

if (!success) {
	console.log('❌ item could not be set.');
	testRes.fail++;
} else {
	console.log('✅ localStorage item was set properly.');
	testRes.pass++;
}

if (result !== 'foobar') {
	console.log('❌ item was not valid.');
	testRes.fail++;
} else {
	console.log('✅ localStorage data was set properly.');
	testRes.pass++;
}

localStore = new lsmock({'foo': 'bar'});

result = localStore.getItem('foo');

if (result !== 'bar') {
	console.log('❌ constructor didn\'t set the proper data.');
	testRes.fail++;
} else {
	console.log('✅ localStorage was initialized properly.');
	testRes.pass++;
}

result = localStore.foo;

if (result !== 'bar') {
	console.log('❌ localStorage could not be retrieved without a mutator.');
	testRes.fail++;
} else {
	console.log('✅ localStorage could be retrieved without a mutator.');
	testRes.pass++;
}
console.log (`\n${testRes.fail === 0 ? '✅ ' : '❌ '} ${testRes.pass} of ${testRes.pass + testRes.fail} tests passed`);

return testRes.fail === 0 ? 0 : 1;