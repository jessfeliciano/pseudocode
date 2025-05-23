# Changelog

All notable changes to the "pseudocode" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2025-04-13
### Added
- Syntax highlighting for:
  - Keywords: `Function`, `End Function`, `Module`, `End Module`, `Return`, `Call`, etc.
  - Comments prefixed with `//`
  - Data types: `Integer`, `String`, `Real`, `Boolean`
  - Variable declarations with `Declare`
  - Variable assignments with `Set`
  - Constant declarations with `Constant`
  - Control flow: `If`, `Else`, `End If`, `Select`, `Case`, `Default`, `End Select`
  - Loops: `For`, `For Each`, `Do`, `While`, `End For`, `End Do`, `End While`
  - Relational operators: `>`, `<`, `>=`, `<=`, `!=`, `==`
  - Logical operators: `AND`, `OR`, `NOT`
  - Math operators: `+`, `-`, `*`, `/`, `MOD`, `^`
  - Function calls via `Call` with support for literal arguments
  - Special library functions: `Display`, `Input`
  - Scoped highlighting of variables and constants

### Notes
- All highlighting is handled via a `tmLanguage.json` grammar definition.
- Nested constructs like parameters and function calls support data type recognition.

## [1.0.1] - 2025-04-13
### Added
- Syntax highlighting for:
  - Control flow keywords nested inside Select Cases

## [1.0.2] - 2025-05-04
### Added
- Instructions to the `README.md` for installing the extension locally via `.vsix` file.
- A extension logo to visually represent the extension in the Extensions view.

## [1.0.3] - 2025-05-07
### Added
- Installs `vsce` package
- Updates instructions to the `README.md` for extension installation
