# Option 1

### Lets say you have 4 commits in your branch

Run command:

```
git rebase -i HEAD~4
```

You’ll see something like:

```
pick a1b2c3 Commit C
pick d4e5f6 Commit D
pick g7h8i9 Commit E
pick j0k1l2 Commit F
```

#### Option 1: squash commits
```
pick a1b2c3 Commit C
squash d4e5f6 Commit D
squash g7h8i9 Commit E
squash j0k1l2 Commit F
```

#### Option 2: fixup commits
```
pick a1b2c3 Commit C
fixup d4e5f6
fixup g7h8i9
fixup j0k1l2
```

#### use push with --force-with-lease
```
git push --force-with-lease
```

