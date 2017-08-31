# Resume Website Example for `documentCSS.app`

This simple resume website example uses Grunt to build and is comptible with `documentCSS.app`.

Prerequisites:

  - `gem update --system && gem install compass`
  - `npm install -g grunt-cli`
  - `git clone && npm install`

## Quick Start

<img src="https://user-images.githubusercontent.com/990216/29806218-c0bbff42-8c53-11e7-851c-31060c5a4140.png" width="75%" />

In this image, **the resume website example** is being viewed on the left in `documentCSS.app`.

Download `documentCSS.app`: https://github.com/fidojs/documentcss-app/wiki/How-to-Download

### Using `documentCSS.app` with resume website example

Start `documentCSS.app`. Directory is wherever you cloned:

```
~/Desktop/documentcss-app-resume-website-example
```

For the dialog about "Distributable Directory", clear the input field and
click OK, because files are built next to their sources by the grunt task.
This means `index.html` will be next to `index.jade` in the root directory.

For the final dialog, accept the default of "generate" for npm run script.

### Start Editing

Now, whenever you edit these files:

- `index.jade`
- `assets/sass/style.sass`

The "generate" npm script will automatically run, and the resume website 
example will live-reload.

All inside the `documentCSS.app` window!

## The Magic Behind It All

What was necessary to make this Grunt app functional with `documentCSS.app`?

- Added `"generate": "grunt jade compass"` to npm scripts.
- Added a `bit-docs.glob.pattern` config to the [`package.json`](https://github.com/fidojs/documentcss-app-resume-website-example/blob/f3703ef97535b2aa692bb24bf4abb8d4a32fd48d/package.json#L34-L41).
- Added a `<script/>` tag with a `docObject` that sets `path` at the end of
  `<body/>` in `index.jade`.

## Possible Improvements

`documentCSS.app` has the ability to assign multiple "glob pattern"-to-command
combinations in `server.js` but only one is mapped by default. Need a settings
interface that allows multiple glob patterns and command combinations running
simultaneously. This would be useful in the case of this repo because we could
split the Jade and SASS tasks up, so that only Jade runs when `.html` changes,
and only SASS runs when `.sass` changes.
