const fs = require("fs");

const { VALID_ARGS, VALID_TYPES } = require("./constants");

function fileExists(filePath) {
  try {
    if (fs.existsSync(path)) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

function validateType(type) {
  if (VALID_TYPES.includes(type.toLowerCase())) {
    return new Error(
      `Invalid type submitted, must be either: ${VALID_TYPES.toString()}`
    );
  }
}

function validateFile(filePath) {
  if (!fileExists(filePath)) {
    return new Error(`Invalid or missing file submission: ${filePath}`);
  }
}

function validateEntry(entry) {
  if (typeof entry.logo === "undefined" || !entry.logo.trim()) {
    return new Error("Missing logo image location");
  }
  if (typeof entry.name === "undefined" || !entry.name.trim()) {
    return new Error("Missing required field: name");
  }
  if (typeof entry.homepage === "undefined" || !entry.homepage.trim()) {
    return new Error("Missing required field: homepage");
  }
  if (typeof entry.chains === "undefined" || !entry.chains.length) {
    return new Error("Missing required field: chains");
  }
  if (typeof entry.app === "undefined" || !Object.values(entry.app).length) {
    return new Error("Missing required field: app");
  }
}

function validateArgs(args) {
  if (args.length < VALID_ARGS.length) {
    throw new Error(
      "Invalid number of arguments. Check README for instructions!"
    );
  }
  const [type, filePath] = args;
  validateType(type);
  validateFile(filePath);
}

module.exports = { validateType, validateEntry, validateArgs };
