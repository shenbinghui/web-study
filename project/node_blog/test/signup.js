var path = require('path');
var assert = require('assert');
var request = require('supertest');
var	app = require('../index');
var User = require('../lib/mongo').User;

var testname1 = 'ccccc';
var testname2 = 'ddddd';
describe('signup',function(){
	describe('POST /signup',function(){
		var agent = request.agent(app);
		beforeEach(function(done){
			User.create({
	        name: testName1,
	        password: '123456',
	        avatar: '',
	        gender: 'x',
	        bio: ''
	      }).exec()
	      .then(function () {
	        done();
	      })
	      .catch(done);
	    });

	    afterEach(function (done) {
	      // 删除测试用户
	      User.remove({ name: { $in: [testName1, testName2] } })
	        .exec()
	        .then(function () {
	          done();
	        })
	        .catch(done);
	    });
	});
})