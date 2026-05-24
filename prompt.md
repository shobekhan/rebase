Create a realistic Git rebase conflict exercise for me in TypeScript. Follow the exact steps as described in requirement

Requirements:

- Show all the cli git commands
- INITIAL STATE (start from main) creating the files
- Multiple files must have merge conflicts
   - Include at least 4–6 TypeScript files with overlapping changes across two branches.
   - Conflicts should include both content conflicts and structural conflicts.
- Some files should be moved to a new directory
   - Simulate a refactor where 2–3 files are relocated (e.g. from /src/utils/ to /src/lib/ or /src/services/).
   - Import paths in dependent files should need updating.
- Some files should be deleted
   - Include 1–2 files that are deleted in one branch but still referenced or modified in another branch, creating delete/modify conflicts.
- One main entry file should tie everything together
   - Include a main.ts (or app.ts) file that imports and calls functions/classes from the moved, conflicted, and deleted files.
   - Resolving the merge should require updating this file correctly.
Designed for VS Code Git conflict resolution
   - Format the exercise as an actual project directory tree.
   - Include realistic Git conflict markers (<<<<<<<, =======, >>>>>>>) inside the affected files.
   - Make it suitable for practicing VS Code’s built-in merge editor and source control tools.
TypeScript only
   - All files should be .ts.
   - Keep code simple but realistic (e.g. utility functions, services, data processors, API helpers).
- END state (show) what will be the ideal rebase to make the merge work in a proper way