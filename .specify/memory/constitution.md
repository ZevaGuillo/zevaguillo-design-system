# Zevaguillo Design System Constitution

## Core Principles

### I. Package-First Architecture

Every feature exists as an independent npm package within the monorepo. Each package MUST be self-contained, independently versionable, and consumable without other packages. Packages MUST have clear, single-purpose responsibilities. No organizational-only packages that exist solely to group other packages.

### II. TypeScript Strict Mode

All packages MUST use TypeScript with strict mode enabled. Type definitions MUST be exported for all public APIs. The `any` type is prohibited in public interfaces. Type safety is non-negotiable for API contracts.

### III. Test-Driven Development

All public APIs MUST have unit tests with minimum 80% coverage. Components MUST have Storybook stories for visual testing. Changes to component APIs MUST include corresponding test updates. Red-Green-Refactor cycle MUST be followed for new features.

### IV. Storybook Documentation

Every component MUST have interactive Storybook stories demonstrating all variants, sizes, and states. Documentation MUST include usage guidelines, accessibility notes, and best practices. Storybook serves as the primary visual testing and documentation platform.

### V. Semantic Versioning

All packages MUST follow Semantic Versioning (MAJOR.MINOR.PATCH). Breaking changes to public APIs require MAJOR version bump. Changes MUST be documented in CHANGELOG.md. Version MUST be updated before publishing.

## Technology Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm workspaces
- **Build Tool**: Turborepo
- **Testing**: Vitest
- **Component Development**: Storybook 8+
- **UI Framework**: React 18+

## Development Workflow

### Code Quality Gates

All PRs MUST pass before merging:

- `npm run lint` passes without errors
- `npm run typecheck` passes without errors
- All tests pass (`npm run test`)
- Storybook builds successfully

### Contribution Process

1. Create feature branch from `main`
2. Implement changes following principles
3. Add/update tests and Storybook stories
4. Update documentation if needed
5. Open PR with description of changes
6. Require review approval before merge

### Package Publishing

- Use Changesets for version management
- Publish only from `main` branch
- All packages must build successfully before publish

## Governance

This constitution supersedes all other development practices. Amendments require:

- Documentation of the proposed change
- Approval from project maintainer
- Migration plan if breaking changes included

All PRs/reviews MUST verify compliance with these principles. Complexity must be justified in implementation plans when it deviates from core principles. Use README.md and package documentation for runtime development guidance.

**Version**: 1.0.0 | **Ratified**: 2026-03-28 | **Last Amended**: 2026-03-28
