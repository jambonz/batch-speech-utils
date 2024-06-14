const noopLogger = {
  info: () => {},
  debug: () => {},
  error: () => {}
};

module.exports = (logger) => {
  logger = logger || noopLogger;

  return {
    transcribe: require('./lib/transcribe').bind(null, logger),
    redact: require('./lib/redact').bind(null, logger)
  };
};
