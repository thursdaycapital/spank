# spank Diff Preview

This folder is a lightweight mixed-language demo for reviewing GitHub diff behavior in the `spank` repository.

## Files

- `index.html` — static browser entry point
- `styles.css` — demo page styling
- `app.js` — small impact-classification preview that also runs in Node
- `types.ts` — TypeScript interfaces and a pure classifier helper
- `notes.md` — extra reviewer notes

## Try it locally

```bash
node examples/diff-preview/app.js
```

Or open `index.html` in a browser to see the tiny preview page.

## Why this exists

The main project is a Go CLI. This example intentionally uses frontend-ish files so GitHub can show several syntax-highlighted diff types in one compact change. Basically: a diff snack platter, not a seven-course refactor.
