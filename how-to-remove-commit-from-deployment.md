# Assuming that we have 4 commits merged to the development branch

Checks the logs

```
git log --oneline -4
```

Example output
```
a1b2c4 Commit 4 (latest)
a1b2c3 Commit 3 (bad feature)  ← remove this
a1b2c2 Commit 2
a1b2c1 Commit 1
```

run command
```
git rebase -i HEAD~4
```

Option A (best): delete the line entirely
```
pick a1b2c1 Commit 1
pick a1b2c2 Commit 2
pick a1b2c4 Commit 4
```

Option B:
```
drop a1b2c3 Commit 3
```

Resolve conflicts (if any)
```
git status
# fix files
git add .
git rebase --continue
```