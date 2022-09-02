//loggerStream with morgan
const rfs = require("rotating-file-stream");
export const stream = rfs.createStream("server.log", {
  size: "10M", // rotate every 10 MegaBytes written
});
