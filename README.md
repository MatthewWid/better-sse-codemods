# Better SSE Codemods

This repository provides codemods utilising [JSCodeShift](https://github.com/facebook/jscodeshift) to allow for easily upgrading to higher versions of [Better SSE](https://github.com/MatthewWid/better-sse).

## Codemods

### `session-push.ts`

Swaps order of session `push` method arguments: data and event name.

```typescript
// Before
session.push("event-name", "My Custom Data", "my-custom-id");
session.push("event-name", "My Custom Data");
session.push("My Custom Data");

// After
session.push("My Custom Data", "event-name", "my-custom-id");
session.push("My Custom Data", "event-name");
session.push("My Custom Data");
```
