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

No additional dependencies required. Just install and start coding!

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

---

**Enjoy using the Pseudocode extension!**

