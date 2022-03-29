const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'alex',
        mongodb_password: 'andaluzia231178',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'alex',
      mongodb_password: 'andaluzia231178',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog',
    },
  };
};
