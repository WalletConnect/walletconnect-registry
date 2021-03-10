const crypto = require("crypto");

function sha256(data) {
  return crypto.createHash("sha256").update(data).digest();
}

const HASH_ZERO = Buffer.from("0".repeat(64), "hex");

function hash(name = "") {
  if (name.trim() === "") return HASH_ZERO;
  const [label, remainder] = name.split(".");
  return sha256(hash(remainder) + sha256(label));
}

function getId(entry) {
  if (typeof entry.homepage === "undefined" || !entry.homepage.trim()) {
    return new Error("Missing required field: homepage");
  }
  const url = new URL(entry.homepage);
  const id = hash(url.host).toString("hex");
  return id;
}

module.exports = { hash, getId };
