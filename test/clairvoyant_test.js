'use strict';

var grunt = require('grunt');

/*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
        test.expect(numAssertions)
        test.done()
    Test assertions:
        test.ok(value, [message])
        test.equal(actual, expected, [message])
        test.notEqual(actual, expected, [message])
        test.deepEqual(actual, expected, [message])
        test.notDeepEqual(actual, expected, [message])
        test.strictEqual(actual, expected, [message])
        test.notStrictEqual(actual, expected, [message])
        test.throws(block, [error], [message])
        test.doesNotThrow(block, [error], [message])
        test.ifError(value)
*/

exports.clairvoyant = {
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    basic: function(test) {
        test.expect(4);
        test.ok(grunt.file.isDir('tmp/basic'), 'should have created project folder');
        test.ok(grunt.file.isDir('tmp/basic/components'), 'should have created components folder');
        test.ok(grunt.file.isDir('tmp/basic/systems'), 'should have created systems folder');
        test.ok(grunt.file.exists('tmp/basic/factory.js'), 'should have created factory file');
        test.done();
    },
    components: function(test) {
        test.expect(4);
        test.ok(grunt.file.isDir('tmp/components/components'), 'should have created components folder');
        test.ok(grunt.file.exists('tmp/components/components/a.js'), 'should have made "A" component');
        test.ok(grunt.file.exists('tmp/components/components/b.js'), 'should have made "B" component');
        test.ok(grunt.file.exists('tmp/components/components/c.js'), 'should have made "C" component');
        test.done();
    }
};
