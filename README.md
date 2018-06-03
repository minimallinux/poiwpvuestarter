# poiwpvuestarter

A Vue JS Project Starter using Poi build tool.

Poi is a higher level tool that uses webpack under the hood. By default, it comes with a bunch of presets and plugins already pre-configured for most common cases. Extra configurations can be done using a poi.config.js file. The underlining webpack config can also be mutated from the Poi config file.

It prepares for you a development setup with Hot Module Replacement and a dev server, and a production setup optimized for fast load and performance by minifying and mangling the code, producing optimized bundles, applying caching patterns and more.

It also enables to use Svelte as a poi plugin (the magical disappearing ui framework) which compiles javascript at build time and has a range of other goodies.

https://svelte.technology/

This is a starter for POI Vue JS Projects, with basics like router, axios and /components/App files ready to build on.

This particular one is intended for use with a Vue front end and a Wordpress Back end using the wp-json api.

But those bits can easily be removed if not required ("yarn remove axios", and references to axios in index.js) and it can be used for anything, using the Poi build tool

https://poi.js.org/

Uses index.js as starting point to build out the project.

Needs recent Nodejs/npm/yarn installed on the machine.

Run

$ yarn   to get all the packages

Then

$ npm start  (it runs poi index.js)

To show project at http://localhost:4000

Using the Poi server (still webpack)

