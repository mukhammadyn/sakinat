const { port } = require("../config");
const server = require("./core/app");

server.listen(port, () => console.log(`App running on port ${port}!`));
