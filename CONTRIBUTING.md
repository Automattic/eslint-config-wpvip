# Contributing

## Getting Started

This repo provides custom ESLint rules (in `./rules`) and configs (`./configs`). Generally speaking, any change is welcome for discussion, but keep in mind that these rules and configs are used across all of our projects, so they need to be practical and flexible.

## Automated Testing

This repo lints itself! Try to add code in `__fixtures__` that will produce errors, confirm that the errors are caught, then run `npm run jest:update-snapshot` to expect the errors.
