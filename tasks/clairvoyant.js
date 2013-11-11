/*
 * grunt-clairvoyant
 * https://github.com/MCluck90/grunt-clairvoyant
 *
 * Copyright (c) 2013 Mike Cluck
 * Licensed under the MIT license.
 */

'use strict';

var Clairvoyant = require('clairvoyant'),
    path = require('path');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('clairvoyant', 'Compiles Clairvoyant projects', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
                is3D: false,
                failOnWarn: false,
                overwrite: false,
                reporter: 'default'
        });

        // User must specify the source and destination of the project
        if (!options.src) {
            grunt.log.writeln(JSON.stringify(options, null, 4));
            grunt.fail.fatal('Must specify src');
        }
        if (!options.dest) {
            grunt.fail.fatal('Must specify dest');
        }

        if (!grunt.file.exists(options.src)) {
            grunt.fail.fatal('Could not find "' + options.src + '"', 3);
        }

        options.src = path.resolve(process.cwd(), options.src);
        options.output = path.resolve(process.cwd(), options.dest);

        var cvt = new Clairvoyant(options);
        cvt.parse();
        cvt.compile();
    });

};
