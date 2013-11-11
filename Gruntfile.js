/*
 * grunt-clairvoyant
 * https://github.com/MCluck90/grunt-clairvoyant
 *
 * Copyright (c) 2013 Mike Cluck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp/*']
        },

        // Configuration to be run (and then tested).
        clairvoyant: {
            basic: {
                options: {
                    src: 'test/ct-files/basic.ct',
                    dest: 'tmp/basic'
                }
            },
            components: {
                options: {
                    src: 'test/ct-files/components.ct',
                    dest: 'tmp/components'
                }
            },
            systems: {
                options: {
                    src: 'test/ct-files/systems.ct',
                    dest: 'tmp/systems',
                    is3d: true
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'clairvoyant', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
