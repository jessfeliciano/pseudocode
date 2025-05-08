# Pseudocode Syntax Highlighting for VS Code

This extension provides syntax highlighting for the pseudocode language as described by "Starting Out with Programming Logic and Design" Sixth Edition by Tony Gaddis, for Visual Studio Code.

Designed for readability and clarity, this language is perfect for students, educators, and algorithm design.

---

## Features

- **Keyword highlighting**: `Function`, `End Function`, `If`, `Then`, `Else`, `While`, `End While`, etc.
- **Data types**: Highlights built-in types like `Integer`, `String`, `Real`, and `Boolean`.
- **Function declarations and calls**:
  - Example: `Function Integer calculateSum(a, b)`
  - Example: `Call calculateSum(5, 10)`
- **Control structures**: `If`, `Else`, `Select Case`, `For`, `For Each`, `Do`, `While`, `End` statements.
- **Variable declaration and assignment**:
  - `Declare Integer count`
  - `Set count = 10`
- **Constants**:
  - Example: `Constant Integer MAX_VALUE = 100`
- **Library functions**: `Display`, `Input`
- **Operators**:
  - Logical: `AND`, `OR`, `NOT`
  - Math: `+`, `-`, `*`, `/`, `MOD`, `^`
  - Relational: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **String and Boolean literals**
- **Comment support** with `//`
- **Nested syntax highlighting** within functions, modules, and calls
- **Modular structure support**: `Module`, `End Module`

> Example of function highlighting:

```pseudocode
Function Integer add(Integer a, Integer b)
    Return a + b
End Function
```

---

## Requirements

No additional dependencies required. Just locally install and start coding!

---

## Installation Instructions

Though this extension is not published to the Visual Studio Code Marketplace, you can still install and use it locally by following these steps:

### 1. Package this extension

Open this repository in VS Code and run the following `vsce` command package the extension:

```
vsce package
```

This will generate a `.vsix` file that will look something like this: `pseudocode-1.0.0.vsix`

### 2. Install the `.vsix` File to VS Code

Now that we've generated the `.vsix` file, we will now need to run a command to install the extension locally. There are two ways to do this: 

1. Run a command with that file name:

```
code --install-extension pseudocode-1.0.0.vsix
```

2. Open VS Code's Command Palette and type `Install from VSIX`and select the `.vsix` file you just generated.

### 3. Start pseudocoding by creating a file with the extension `.psc`

---

## Extension Settings

This extension does not contribute any VS Code settings at this time.

---

## Known Issues

- Some advanced edge cases in nested syntax may not be fully highlighted.
- `Return` statements are only recognized inside functions.

---

## Release Notes

### 1.0.0
Initial release with foundational highlighting.

### 1.0.1
Adds syntax highlighting for control flow keywords nested inside Select Cases.

---

**Enjoy using the Pseudocode extension!**

