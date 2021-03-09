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

// "walletconnect.org" -> 36d0a3e030a7e1f3452014945e9b137a2de8a7227f611cbef0bcd06b2e9e2744

module.exports = hash;
