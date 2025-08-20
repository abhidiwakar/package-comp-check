# package-comp-check

A CLI utility to check which version of a package is compatible with the React version in your project.

## Features
- Checks compatibility of npm packages with your project's React version
- Simple CLI usage
- Fast and lightweight

## Installation

```bash
npm install -g package-comp-check
```

## Usage

```bash
package-comp-check <package-name>
```

### Options
- `--help`    Show help information
- `--version` Show version number

## Example

```bash
package-comp-check zustand
```

This will output the latest compatible version of `zustand` for your project's React version.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
