#!/usr/bin/env node
const { getCompatibleVersion } = require("./core");
const pkg = require("../package.json");

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help")) {
  console.log(`\nUsage: package-comp-check <package-name> [options]\n\nOptions:\n  --help     Show help information\n  --version  Show version number\n`);
  process.exit(0);
}

if (args.includes("--version")) {
  console.log(pkg.version);
  process.exit(0);
}

const pkgName = args[0];

if (!pkgName || pkgName.startsWith("--")) {
  console.error("Usage: package-comp-check <package-name>\nTry --help for more information.");
  process.exit(1);
}

getCompatibleVersion(pkgName, "latest")
  .then(({ reactVersion, compatibleVersion }) => {
    console.log(`React version in project: ${reactVersion}`);
    if (!compatibleVersion) {
      console.log(`❌ No compatible version of ${pkgName} found for React ${reactVersion}`);
    } else {
      console.log(
        `✅ Compatible version of ${pkgName} for React ${reactVersion}: ${compatibleVersion}`
      );
    }
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
