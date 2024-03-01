const swaggerJSDoc = require("swagger-jsdoc");
const { healthCheckDoc } = require("../swaggerControllers/healthDoc");
const { PORT } = require("../config/variables");

const swaggerApiPath = {
  "/v1/health/check": healthCheckDoc,
};
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "aws service practice api documentation",
      version: "1.0.0",
      description: "API documentation for aws service practice project",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Local Server",
      },
    ],
    paths: swaggerApiPath,
  },
  explorer: true,
  apis: [],
};

const specs = swaggerJSDoc(options);

module.exports = specs;
