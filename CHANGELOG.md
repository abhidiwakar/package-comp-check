## [3.0.1](https://github.com/abhidiwakar/package-comp-check/compare/v3.0.0...v3.0.1) (2025-09-07)


### Bug Fixes

* update npm publish configuration to ensure public access ([a5aaf7c](https://github.com/abhidiwakar/package-comp-check/commit/a5aaf7c2e96ce8a64c599ba15bb30f21c3905351))

# [3.0.0](https://github.com/abhidiwakar/package-comp-check/compare/v2.1.1...v3.0.0) (2025-09-07)


* feat!: rename CLI command to react-pcc and enhance test suite ([8d5cc8e](https://github.com/abhidiwakar/package-comp-check/commit/8d5cc8ef9b9ee8b201752cb01ee47b414f5d395d))


### BREAKING CHANGES

* - CLI command changed from 'pcc' to 'react-pcc'
- Users must update any scripts or documentation referencing the old command
- Package maintains same installation process but execution command is different

Additional changes:
- Added comprehensive test suite with 12 test cases covering package validation, URL encoding, and version compatibility
- Enhanced package name validation and edge case handling
- Improved error messages and usage instructions

## [2.1.1](https://github.com/abhidiwakar/package-comp-check/compare/v2.1.0...v2.1.1) (2025-09-04)


### Bug Fixes

* remove npm publish from postrelease script in package.json ([a391cdb](https://github.com/abhidiwakar/package-comp-check/commit/a391cdb188065543ea62121f3cc8d94567ac9f9c))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/abhidiwakar/package-comp-check/compare/v2.0.0...v2.1.0) (2025-09-04)


### Features

* add .versionrc.json for versioning configuration ([ff7aa75](https://github.com/abhidiwakar/package-comp-check/commit/ff7aa75307661ee8042c4c6c5e010d0428a7b7b4))

## 2.0.0 (2025-09-04)


### Features

* add CI/CD badge to README for better visibility of build status ([3bc83fc](https://github.com/abhidiwakar/package-comp-check/commit/3bc83fccae0b35b83fd94338580549815985c753))
* enhance README with scoped package support and examples; improve error handling in core logic ([f62dfe1](https://github.com/abhidiwakar/package-comp-check/commit/f62dfe124d158ad6a28159c65e24afd47e57983b))
* restructure project for TypeScript support and add CI/CD pipeline ([0340eaf](https://github.com/abhidiwakar/package-comp-check/commit/0340eaf2749ab147e8164e486736c0ca919824c6))


### Bug Fixes

* update license from ISC to MIT in package.json ([e54b11d](https://github.com/abhidiwakar/package-comp-check/commit/e54b11d3800f709a1676ab9cb867768db0b99b38))
