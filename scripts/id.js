const hash = require("./hash");

function getId(entry) {
  if (typeof entry.homepage === "undefined" || !entry.homepage.trim()) {
    return new Error("Missing required field: homepage");
  }
  const url = new URL(entry.homepage);
  const id = hash(url.host).toString("hex");
  return id;
}

module.exports = getId;
