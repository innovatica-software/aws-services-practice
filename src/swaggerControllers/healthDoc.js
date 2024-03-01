const { swaggerResponse } = require("./swaggerHelper");

const healthCheckDoc = {
  get: {
    tags: ['Health'],
    summary: 'health check',
    description: '',
    parameters: [],
    responses: swaggerResponse,
  },
};

module.exports = {
  healthCheckDoc,
};
