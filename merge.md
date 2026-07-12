### The basic Git merge command is:

```
git merge <branch-name>
```

If you are on main and want to merge feature into it:

```
git checkout main
git merge feature
```

Merge without committing immediately:

```
git merge --no-commit <branch-name>
```

Abort a merge in progress:

```
git merge --abort
```