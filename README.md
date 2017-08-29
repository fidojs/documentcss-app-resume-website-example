# ricosuavetaco

This is an example resume website that uses the grunt task runner to run tasks:

- Compile SASS.
- Compile Jade.

The tasks result in a generated static site.

<img src="https://user-images.githubusercontent.com/990216/29806218-c0bbff42-8c53-11e7-851c-31060c5a4140.png" width="75%" />

This example is setup to be compatible with `documentCSS.app`:

https://github.com/fidojs/documentcss-app/wiki/How-to-Download

Download `documentCSS.app` and clone this repository.

Start `documentCSS.app` and direct the directory dialog to the clone:

```
~/Desktop/documentcss-app-resume-website-example
```

Or wherever you cloned `documentcss-app-resume-website-example` to.

For the next dialog about Distributable Directory, clear the input and click OK
(this is because files get built next to their sources, so therefore
`index.html` will be next to `index.jade`, in the root directory).

For the final dialog, accept the default of "generate" for npm run script.

## What was necessary

What was necessary to make this Grunt app functional with `documentCSS.app`?

- Added a `glob.pattern` config to the `package.json`.
- Added `"generate": "grunt jade compass"` to npm scripts.
- Added a `<script/>` tag with a `docObject` that sets `path` at the end of
  `<body/>` in `index.jade`.

## Improvements

`documentCSS.app` has the ability to assign multiple "glob pattern"-to-command
combinations in `server.js` but only one is mapped by default. Need a settings
interface that allows multiple glob patterns and command combinations running
simultaneously. This would be useful in the case of this repo because we could
split the Jade and SASS tasks up, so that only Jade runs when `.html` changes,
and only SASS runs when `.scss` changes.
