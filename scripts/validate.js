const fs = require("fs");

const {
  VALID_SUBMIT_ARGS,
  VALID_REPLACE_ARGS,
  VALID_TYPES,
} = require("./constants");

function fileExists(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

function validateId(id) {
  if (typeof id !== "string" || id.length !== 64) {
    throw new Error("Invalid id submitted, must be 32 byte hex string");
  }
}

function validateType(type) {
  if (!VALID_TYPES.includes(type.toLowerCase())) {
    throw new Error(
      `Invalid type submitted, must be either: ${VALID_TYPES.toString()}`
    );
  }
}

function validateFile(filePath) {
  if (!fileExists(filePath)) {
    throw new Error(`Invalid or missing file submission: ${filePath}`);
  }
}

function validateEntry(entry) {
  if (typeof entry.logo === "undefined" || !entry.logo.trim()) {
    throw new Error("Missing logo image location");
  }
  if (typeof entry.name === "undefined" || !entry.name.trim()) {
    throw new Error("Missing required field: name");
  }
  if (typeof entry.description === "undefined") {
    throw new Error("Missing required field: description");
  }
  if (typeof entry.homepage === "undefined" || !entry.homepage.trim()) {
    throw new Error("Missing required field: homepage");
  }
  if (typeof entry.chains === "undefined" || !entry.chains.length) {
    throw new Error("Missing required field: chains");
  }
  if (typeof entry.versions === "undefined" || !entry.versions.length) {
    throw new Error("Missing required field: versions");
  }
  if (typeof entry.app === "undefined" || !Object.values(entry.app).length) {
    throw new Error("Missing required field: app");
  }
}

function validateSubmitArgs(args) {
  if (args.length < VALID_SUBMIT_ARGS.length) {
    throw new Error(
      "Invalid number of arguments. Check README for instructions!"
    );
  }
  const [type, filePath] = args;
  validateType(type);
  validateFile(filePath);
}

function validateReplaceArgs(args) {
  if (args.length < VALID_REPLACE_ARGS.length) {
    throw new Error(
      "Invalid number of arguments. Check README for instructions!"
    );
  }
  const [id, filePath] = args;
  validateId(id);
  validateFile(filePath);
}

module.exports = {
  validateType,
  validateEntry,
  validateSubmitArgs,
  validateReplaceArgs,
};
