# Assume that you have multiple times conflict occuring on a file and you wish to avoid it

1. Switch to your branch

```
git checkout pre-order
```

2. Find the common ancestor

```
git merge-base develop pre-order
```

3. Start an interactive rebase

```
git rebase -i $(git merge-base develop pre-order)
```

Git opens an editor showing your commits:

```
pick a123456 Initial pre-order implementation
pick b234567 Update shipping logic
pick c345678 Fix product availability
pick d456789 Refactor product model
```

4. Squash all commits into one

```
pick a123456 Initial pre-order implementation
squash b234567 Update shipping logic
squash c345678 Fix product availability
squash d456789 Refactor product model
```

Save and close the editor.

5. Resolve conflicts if necessary

```
git status
git add .
git rebase --continue
```

6. Rebase the single commit onto develop

```
git rebase origin/develop
```

Now you have one commit containing your changes, and Git will replay only that commit onto develop.

If conflicts occur, resolve them once:

```
git add .
git rebase --continue
```

7. Push the branch

```
git push --force-with-lease origin pre-order
```