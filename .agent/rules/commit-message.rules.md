# Commit Message Convention

## 📝 Format
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

## 🏷️ Type (Required)

| Type | Description | Example |
| :--- | :--- | :--- |
| `feat` | New feature | `feat(auth): add login with Google` |
| `fix` | Bug fix | `fix(table): resolve pagination issue` |
| `docs` | Documentation changes | `docs(readme): update installation steps` |
| `style` | Code style changes (formatting, missing semicolons) | `style(button): fix indentation` |
| `refactor` | Code refactoring without changing functionality | `refactor(hooks): extract common logic to factory` |
| `perf` | Performance improvements | `perf(query): add memoization to user list` |
| `test` | Adding or updating tests | `test(auth): add login unit tests` |
| `chore` | Maintenance tasks, dependencies | `chore(deps): update react to v18.3` |
| `build` | Build system or external dependencies | `build(webpack): optimize bundle size` |
| `ci` | CI/CD configuration changes | `ci(github): add deployment workflow` |
| `revert` | Revert previous commit | `revert: feat(auth): add login with Google` |

## 🎯 Scope (Optional but Recommended)

The scope should indicate the **affected module, feature, or layer**.

### Common Scopes:
- **Features/Modules**: `auth`, `dashboard`, `users`, `events`, `banners`
- **Layers**: `api`, `hooks`, `ui`, `components`, `utils`
- **Specific Components**: `modal`, `table`, `form`, `repeater`
- **Infrastructure**: `config`, `deps`, `workflow`, `build`

**Examples**:
- `feat(events): add event detail view`
- `fix(hooks): correct query key invalidation`
- `refactor(ui): standardize repeater pattern`

## ✍️ Subject (Required)

- **Imperative mood**: Use "add" not "added", "fix" not "fixed"
- **No period** at the end
- **Lowercase** first letter
- **Max 50 characters** for subject line
- Be **concise but descriptive**

**Good**:
- `feat(auth): add password reset functionality`
- `fix(table): resolve infinite scroll bug`

**Bad**:
- `feat(auth): Added password reset.` (past tense, period)
- `fix: bug` (too vague)

## 📄 Body (Optional)

- Use when the subject alone isn't clear enough
- Explain **what** and **why**, not **how**
- Wrap at **72 characters**
- Separate from subject with **blank line**

**Example**:
```
feat(users): add bulk user import

Allow admins to upload CSV files containing user data.
This feature includes validation, error reporting, and
progress tracking for large imports.
```

## 🔗 Footer (Optional)

- Reference issues: `Closes #123`, `Fixes #456`
- Breaking changes: `BREAKING CHANGE: Auth API now requires OAuth2`

## 🎨 Full Examples

### Simple Feature
```
feat(dashboard): add weekly sales chart
```

### Bug Fix with Context
```
fix(api): resolve timeout on large data queries

Increased timeout limit from 5s to 30s for heavy
aggregation queries to prevent premature failures.

Fixes #234
```

### Refactor with Breaking Change
```
refactor(hooks)!: migrate to createMutationHook factory

All mutation hooks must now use the factory pattern
for consistency and automatic cache invalidation.

BREAKING CHANGE: Direct useMutation usage is deprecated.
Migrate to createMutationHook.
```

### Documentation Update
```
docs(naming): create centralized naming convention rules
```

### Dependency Update
```
chore(deps): upgrade Material UI to v6.2.0
```

## ⚡ Quick Reference

**For AI Code Generation Sessions**:
After making changes, suggest commit message in format:
```
<type>(<scope>): <subject>
```

**Common Patterns**:
- New page/view: `feat(admin): add customer service view`
- New hook: `feat(hooks): create useCustomerService hook`
- New API: `feat(api): add customer service endpoints`
- Fix bug: `fix(table): resolve pagination reset on filter`
- Update docs: `docs(readme): update feature creation workflow`
- Refactor: `refactor(repeater): standardize 3-file structure`
- Style/format: `style(ui): apply consistent spacing`
- Dependencies: `chore(deps): update next to v16.1.2`
