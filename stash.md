### Stash with descriptive message

```
git stash push -m "Stash documentation: work in progress"
```

### Stash including untracked files

```
git stash push -u -m "Stash documentation: work in progress"
```

### List all stashes

```
git stash list
```

### Apply a stash (keep it in the stash list)

```
git stash apply stash@{0}
```

### Apply and remove a stash

```
git stash pop
git stash pop stash@{0}
git stash pop stash@{1}
```

### Delete a specific stash

```
git stash drop stash@{0}
```

### Delete all stashes

```
git stash clear
```

### Show what's inside a stash

```
git stash show stash@{0}
```

### Create a branch from a stash

```
git stash branch my-feature stash@{0}
```