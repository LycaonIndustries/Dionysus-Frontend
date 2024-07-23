module.exports = {
  // Indicates this is the root configuration file, stopping ESLint from looking further up the directory tree
  root: true,
  // Environment settings specifying the environment the code is expected to run in
  env: {
    // Enables browser global variables
    browser: true,
    // Enables ES2020 global variables
    es2020: true
  },
  // Base configurations and additional rule sets to extend from
  extends: [
    // Use recommended ESLint rules
    'eslint:recommended',
    // Use recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Use recommended rules for React hooks
    'plugin:react-hooks/recommended',
  ],
  // Patterns to ignore during linting
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // Specifies the parser to be used for TypeScript files
  parser: '@typescript-eslint/parser',
  // Plugins to use, adding additional rules or extending core functionality
  plugins: ['react-refresh'],
  // Custom rules configuration
  rules: {
    // Warn when components are not the only export from a module, allowing constant exports
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
