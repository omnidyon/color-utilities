# Contributing to Color Utilities

We love your input! We want to make contributing to Color Utilities as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any Contributions You Make Will Be Under the MIT License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report Bugs Using GitHub's [Issue Tracker](https://github.com/your-username/color-utilities/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/your-username/color-utilities/issues/new); it's that easy!

## Write Bug Reports With Detail, Background, and Sample Code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Color-Specific Contribution Guidelines

### Adding New Color Spaces

When adding a new color space conversion, please follow these patterns:

1. **File Structure**: Place conversion functions in the appropriate directory structure
2. **Naming Convention**: Use `sourceToDestination` format (e.g., `rgbToHsl`)
3. **Documentation**: Update both JSDoc comments and README.md conversion tables
4. **Testing**: Add comprehensive tests covering edge cases and gamut boundaries

### Example: Adding a New Color Space

```javascript
/**
 * Converts [Source] color values to [Destination] color values
 * @param {Object} sourceColor - The source color values
 * @param {number} sourceColor.component1 - Description
 * @param {number} sourceColor.component2 - Description
 * @param {number} sourceColor.component3 - Description
 * @returns {Object} The converted color values
 */
export function sourceToDestination(sourceColor) {
  // Implementation here
  return {
    component1: /* calculation */,
    component2: /* calculation */,
    component3: /* calculation */
  };
}