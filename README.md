# grunt-clairvoyant

> Compiles Clairvoyant projects

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-clairvoyant --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-clairvoyant');
```

## The "clairvoyant" task

### Overview
In your project's Gruntfile, add a section named `clairvoyant` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  clairvoyant: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.src
Type: `String`

The file to compile.

#### options.dest
Type: `String`

Where to save compiled project.

#### options.is3d
Type: `Boolean`
Default value: `false`

If true, will compile for Psykick3D.

#### options.failOnWarn
Type: `Boolean`
Default value: `false`

If true, project generation will fail when a warning is issued.

#### options.overwrite
Type: `Boolean`
Default value: `false`

If true, will overwrite any pre-existing files.

#### options.reporter
Type: `String`
Default value: `'default'`

Specify which Clairvoyant reporter to use.
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
