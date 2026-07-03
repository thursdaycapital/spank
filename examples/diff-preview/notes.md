# Reviewer Notes

## Goal

Add a few harmless files that make GitHub's diff UI easy to inspect across common file types.

## What to check

1. New-file diffs render for JavaScript, TypeScript, CSS, HTML, README, and Markdown.
2. Syntax highlighting appears for each language.
3. The example stays isolated under `examples/diff-preview/` and does not affect the Go CLI runtime.
4. The JavaScript demo can run with plain Node.

## Non-goals

- No dependency installation.
- No changes to `main.go`.
- No generated assets or binary files.
