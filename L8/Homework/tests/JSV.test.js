/* eslint-disable no-undef */
const {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
} = require('../homework');

describe('createUserClass()', function() {
	it('should return a user constructor that correctly builds user objects', function() {
		const User = createUserClass();
		const user = new User({username: 'iamFPlaza', name: 'Francis', email: 'francis@avionschool.com', password: 'AS Rocks!' });
		expect(user.username).toBe('iamFPlaza');
		expect(user.name).toBe('Francis');
		expect(user.email).toBe('francis@avionschool.com');
		expect(user.password).toBe('AS Rocks!');
	});
});

describe('addPrototypeMethod(Constructor)', function() {
	it('should add the method sayHi to the constructor', function() {
		function Test() {
			this.test = true;
		}
		addPrototypeMethod(Test);
		const test = new Test();
		expect(test.sayHi()).toBe('Hello World!');
	});
});

describe('addReverseString(StringPrototype)', function(){
	it('should add a reverse string method to the String prototype that returns a reversed version of the string', function() {
		addReverseString();
		const str = 'Hello';
		expect(str.reverse()).toBe('olleH');
	});
});
