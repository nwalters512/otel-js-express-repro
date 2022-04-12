# otel-js-express-repro

Reproduction for https://github.com/open-telemetry/opentelemetry-js-contrib/issues/970.

Steps to reproduce:

- Clone the repo
- Run `yarn install`
- Run `node index.js`
- Observe that the following output is logged:

```
no function to unwrap.
Error
    at ExpressInstrumentation.unwrap [as _unwrap] (/Users/nathan/git/otel-js-express-repro/node_modules/shimmer/index.js:84:13)
    at InstrumentationNodeModuleDefinition.unpatch (/Users/nathan/git/otel-js-express-repro/node_modules/@opentelemetry/instrumentation-express/build/src/instrumentation.js:72:22)
    at ExpressInstrumentation.disable (/Users/nathan/git/otel-js-express-repro/node_modules/@opentelemetry/instrumentation/build/src/platform/node/instrumentation.js:123:24)
    at Object.<anonymous> (/Users/nathan/git/otel-js-express-repro/index.js:11:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
no function to unwrap.
Error
    at ExpressInstrumentation.unwrap [as _unwrap] (/Users/nathan/git/otel-js-express-repro/node_modules/shimmer/index.js:84:13)
    at InstrumentationNodeModuleDefinition.unpatch (/Users/nathan/git/otel-js-express-repro/node_modules/@opentelemetry/instrumentation-express/build/src/instrumentation.js:73:22)
    at ExpressInstrumentation.disable (/Users/nathan/git/otel-js-express-repro/node_modules/@opentelemetry/instrumentation/build/src/platform/node/instrumentation.js:123:24)
    at Object.<anonymous> (/Users/nathan/git/otel-js-express-repro/index.js:11:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
no function to unwrap.
Error
    at ExpressInstrumentation.unwrap [as _unwrap] (/Users/nathan/git/otel-js-express-repro/node_modules/shimmer/index.js:84:13)
    at InstrumentationNodeModuleDefinition.unpatch (/Users/nathan/git/otel-js-express-repro/node_modules/@opentelemetry/instrumentation-express/build/src/instrumentation.js:74:22)
    at ExpressInstrumentation.disable (/Users/nathan/git/otel-js-express-repro/node_modules/@opentelemetry/instrumentation/build/src/platform/node/instrumentation.js:123:24)
    at Object.<anonymous> (/Users/nathan/git/otel-js-express-repro/index.js:11:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
```
