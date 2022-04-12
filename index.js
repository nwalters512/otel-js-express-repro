const {
  ExpressInstrumentation,
} = require('@opentelemetry/instrumentation-express');

const instrumentation = new ExpressInstrumentation();

instrumentation.enable();

instrumentation.disable();
