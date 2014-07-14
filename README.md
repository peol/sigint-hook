# sigint-hook
Normalize the process SIGINT signal.

## Usage

### Install
```
npm install sigint-hook
```

### Configuration
`eventOnHookOnly` (default `false`): if `true`, will not emit on the `process` global object

`triggerOnce` (default: `false`): if `true`, will stop listening after first `SIGINT` signal

### Examples
Default:
```js
require("sigint-hook")().on("SIGINT", function() {
  // do something
});
```
Customized:
```js
require("sigint-hook")({
	eventOnHookOnly: true,
	triggerOnce: true
}).on("SIGINT", function() {
  // do something
});
```
Please note that you can kill sigint-hook by running the `.close()` method on the return object:
```js
var sigint = require("sigint-hook")({
	eventOnHookOnly: true
}).on("SIGINT", function() {
  // do something
});

// kill off early:
sigint.close();
```

## License
This project uses MIT. See `LICENSE` file for additional information.
