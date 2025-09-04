# package-comp-check

A CLI utility to check which version of a package is compatible with the React version in your project.

## Features
- Checks compatibility of npm packages with your project's React version
- Supports scoped packages (e.g., `@mui/material`, `@testing-library/react`)
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
- `--debug`   Show debug information for troubleshooting

## Examples

```bash
# Regular package
package-comp-check zustand

# Scoped package
package-comp-check @mui/material

# TypeScript types
package-comp-check @types/react

# With debug information
package-comp-check @emotion/react --debug
```

## Scoped Packages

This tool fully supports scoped packages (packages starting with `@`). When using scoped packages:

- Always include the complete package name: `@scope/package-name`
- Use quotes if your shell requires them: `"@mui/material"`
- The tool automatically handles URL encoding for special characters

### Common Issues with Scoped Packages

If you encounter issues with scoped packages, try these troubleshooting steps:

1. **Use quotes around the package name:**
   ```bash
   package-comp-check "@mui/material"
   ```

2. **Check for typos in the scope or package name:**
   ```bash
   # ❌ Incorrect
   package-comp-check @mui
   
   # ✅ Correct
   package-comp-check @mui/material
   ```

3. **Use debug mode to see what's being processed:**
   ```bash
   package-comp-check @mui/material --debug
   ```

4. **Verify the package exists on npm:**
   Visit `https://www.npmjs.com/package/@scope/package-name` to confirm the package exists.

## How It Works

1. Reads your project's `package.json` to find the React version
2. Fetches package information from npm registry
3. Finds versions that are compatible with your React version by checking `peerDependencies`
4. Returns the latest compatible version

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
