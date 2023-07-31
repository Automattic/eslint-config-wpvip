# Contributing

## Getting Started

This repo provides custom ESLint rules (in `./rules`) and configs (`./configs`). Generally speaking, any change is welcome for discussion, but keep in mind that these rules and configs are used across all of our projects, so they need to be practical and flexible.

## Automated Testing

This repo lints itself! Try to add code in `__fixtures__` that will produce errors, confirm that the errors are caught, then run `npm run jest:update-snapshot` to expect the errors.

## Publishing a New Release

The process to release to npm should be started when all pull requests intended for publishing have been merged and the software has been fully tested for publication. You can release either using GitHub Actions or locally.

### Versioning Guidelines

- `patch`: for non-breaking changes/bugfixes and small updates.
- `minor`: for some new features, bug fixes, and other non-breaking changes.
- `major`: for breaking changes.

### Note on NPM token

Publishing via the GitHub Action requires that the `NPM_TOKEN` be set correctly in GitHub Actions secrets. This should be an npm token generated for a bot user on [the npm @automattic org](https://www.npmjs.com/settings/automattic) that has publish access to this repo.

### How To Release

#### GitHub Actions (Preferred)

This is the preferred method for pushing out the latest release. The workflow runs a bunch of validations, generates a build, bump versions + tags, pushes out to npm, and bumps to the next dev version.

1. Initiate the [release process here](https://github.com/Automattic/eslint-config-wpvip/actions/workflows/npm-prepare-release.yml).
1. On the right-hand side, select "Run Workflow".
1. Pick your preferred version bump.
1. Click `Run Workflow`.
1. Wait for a pull request to appear. The pull request will update the version number and shall be assigned to you.
1. When ready, merge the pull request. This will lead to a new version to be [published on npmjs.com](https://www.npmjs.com/package/@automattic/eslint-plugin-wpvip).
1. Another pull request will be created to bump to a development version, also assigned to you. Merge it to finish the process.

#### Local

If GitHub Actions is down or not working for some reason or you need to push a release for a previous version (e.g. security release), you can still publish a new release.

1. Check out the branch or commit you want to release using `git`.
1. Run `npm run prepare` to generate the build.
1. Create a new branch for the release: `git checkout -b release/vX.Y.Z` -- remember to update the version number in the branch name.
1. Run`npm version <type>` to bump the version prior to publishing (see versioning types above).
1. Commit the changes and create a pull request, then merge it in GitHub.
1. Run`npm publish`.
1. Create [a new release in Github](https://github.com/Automattic/eslint-config-wpvip/releases/new). Use the built-in "Generate Release Notes" to get release notes. Tag the version.
1. Observe that the package has been released on GitHub and npmjs.com.
