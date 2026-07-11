### Graph

```
git log --graph
```
Good tool to show how conflicts arosed and were merged.

### See the last 5 commits

```
git log -n 5
```

### One line

```
git log --oneline
git log --oneline --graph
```

### search in logs

```
git log --grep 'foo'
```

### search in logs (shows the changes)

```
git log --grep 'foo' -p
```

### search in logs (shows the changes, in the specific files)

```
git log -p src/index.ts
```

### Search commits by author

git log --author="John"


### Search commits containing a specific code change

git log -S "calculateTax"

### Search using a regular expression

git log -G "function.*login"

### Search commits in a date range

git log --since="2026-01-01" --until="2026-07-01"

### Search a specific file's history

git log -- app.js

### Search all branches

git log --all --grep="migration"

### Find who changed a specific line

git blame app.js