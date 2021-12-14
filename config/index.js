const dotenv = require("dotenv");

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config();
}
module.exports = {
  port: process.env.APP_PORT || 5000,
};
