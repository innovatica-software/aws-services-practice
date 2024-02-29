const express = require("express");
const router = express.Router();
const healthRoute = require("./health.route");
const defaultRoutes = [
  {
    path: "/health",
    route: healthRoute,
  }
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;