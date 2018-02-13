/** 
 * lsmock by Keegan Donley
 * www.keegandonley.com
 * Used for imitating the behavior of localStorage

* Usage:
* const mock = require('lsmock');
* window.localStorage = new mock();
*/

function checkSuccess(key, data) {
	return !!data[key];
}

const lsmock = class lsmock {
	constructor( initial = {} ) {
		for (let key in initial) {
			this[key] = initial[key];
		}
	}

	setItem(key, value) {
		this[key] = value;
		return checkSuccess(key, this);
	}

	getItem(key) {
		return this[key];
	}
}

module.exports = lsmock;