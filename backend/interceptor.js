module.exports = {
  verify1: (req, res, next) => {
    if (req.query.token === "1234") {
      next();
    } else {
      res.end("No autorized1");
    }
  },
  verify2: (req, res, next) => {
    if (req.query.level === "admin") {
      next();
    } else {
      res.end("Level is not enough");
    }
  },
};
