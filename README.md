# Queue Ticket Web

Frontend web app for the queue ticket flow.

## Stack

- Angular `20.3.x`
- PrimeNG `20.x`
- Tailwind CSS `4.x`
- TypeScript `~5.9`
- Noto Sans Thai

## Requirements

Recommended:

```bash
node >=20.19.0
npm >=10
```

## Commands

```bash
npm install
npm start
npm run start:local
```

Development build is the default:

```bash
npm run build
npm run build -- --configuration local
```

Production build:

```bash
npm run build -- --configuration production
```

Test:

```bash
npm test
```

## Environment

Environment files:

```text
src/environments/environment.ts
src/environments/environment.development.ts
src/environments/environment.local.ts
src/environments/environment.production.ts
```

`environment.ts` points to development by default.

Use `npm run start:local` to run with the local environment configuration.

API URL is read through `AppConfigService`.

## Structure

```text
src/app/
  core/       App-level services, constants, utilities
  shared/     Reusable components, pipes, directives, services
  features/   Feature-first modules and pages
```

Current feature:

```text
features/queue/
  ticket-reception/
  ticket-display/
  reset-queue/
  queue.routes.ts
```

Use `features/` for business-specific code first. Move code to `shared/` only when it is reused by multiple features.
