const {
  ExpressInstrumentation,
} = require('@opentelemetry/instrumentation-express');

const instrumentation = new ExpressInstrumentation();

instrumentation.enable();

require('express');

instrumentation.disable();
