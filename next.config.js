const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    webpack: (config) => {
      if (isDev) {
        config.devtool = 'eval-source-map'
      }

      return config
    }
  }
}
