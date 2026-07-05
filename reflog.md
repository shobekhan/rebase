### Example 1: Recover a lost commit

Suppose you accidentally run:

```
git reset --hard HEAD~1
Your latest commit disappears.
```

Run reflog command

```
git reflog
c8d1234 HEAD@{1}: commit: Finish payment API
9abf002 HEAD@{0}: reset: moving to HEAD~1
```

Recover it
```
git reset --hard c8d1234
or
git reset --hard HEAD@{1}
```

### Example 2: Undo a bad rebase

```
git rebase main
```

The rebase goes badly.

Find where you were before:

```
git reflog
```

Example output
```
HEAD@{4}: checkout: moving from main to feature
HEAD@{3}: commit: Add tests
HEAD@{2}: rebase starting
HEAD@{1}: rebase finished
```

Reset back:
```
git reset --hard HEAD@{3}
```

### Example 3: Recover a deleted branch

Suppose you ran by mistake:
```
git branch -D feature
```

The commits are still in the reflog.
```
git reflog
```

Find the last commit:
```
6a7b91e HEAD@{5}: checkout: moving from feature to main
```

Recreate the branch:

```
git branch feature 6a7b91e
```