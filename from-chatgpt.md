# Git Rebase and Merge Conflict Commands Guide

## Core Conflict Resolution Workflow

When a conflict occurs during rebase:

``` bash
git status
git diff

# Fix files manually

git add .
git rebase --continue
```

For single file:

``` bash
git add src/app.js
git rebase --continue
```

------------------------------------------------------------------------

## Inspecting Repository State

### git status

Shows: - Rebase progress - Conflicted files - Remaining commits

``` bash
git status
```

------------------------------------------------------------------------

### git diff

Shows exact conflicts:

``` bash
git diff
```

------------------------------------------------------------------------

### Show only conflicted files

``` bash
git diff --name-only --diff-filter=U
```

------------------------------------------------------------------------

### View commit graph

``` bash
git log --oneline --graph --decorate --all
```

------------------------------------------------------------------------

## Rebase Control Commands

### Continue rebase

``` bash
git rebase --continue
```

------------------------------------------------------------------------

### Abort rebase

``` bash
git rebase --abort
```

Restores branch to state before rebase.

------------------------------------------------------------------------

### Skip problematic commit

``` bash
git rebase --skip
```

------------------------------------------------------------------------

### Edit rebase todo list

``` bash
git rebase --edit-todo
```

------------------------------------------------------------------------

### Show current commit being applied

``` bash
git rebase --show-current-patch
```

------------------------------------------------------------------------

## Conflict Resolution Helpers

### Accept current branch version

``` bash
git checkout --ours src/app.js
```

------------------------------------------------------------------------

### Accept incoming branch version

``` bash
git checkout --theirs src/app.js
```

------------------------------------------------------------------------

## File Staging Commands

Stage all files:

``` bash
git add --all
```

Stage current directory:

``` bash
git add .
```

Interactive staging:

``` bash
git add -p
```

------------------------------------------------------------------------

## Commit Inspection

Show commit details:

``` bash
git show <commit-hash>
```

------------------------------------------------------------------------

Show commits in feature branch only:

``` bash
git log main..feature/test
```

------------------------------------------------------------------------

Show commits in main only:

``` bash
git log feature/test..main
```

------------------------------------------------------------------------

## Recovery Commands

### View HEAD history

``` bash
git reflog
```

------------------------------------------------------------------------

### Restore previous state

``` bash
git reset --hard HEAD@{1}
```

------------------------------------------------------------------------

## Merge Commands

Abort merge:

``` bash
git merge --abort
```

------------------------------------------------------------------------

Find merge base:

``` bash
git merge-base main feature/test
```

------------------------------------------------------------------------

## Cleanup

Remove untracked files:

``` bash
git clean -fd
```

------------------------------------------------------------------------

## Visual Merge Tool

Launch merge tool:

``` bash
git mergetool
```

------------------------------------------------------------------------

## Recommended Professional Workflow

``` bash
git fetch origin

git checkout feature/test

git rebase origin/main

# resolve conflicts

git add .

git rebase --continue

# verify

git log --oneline --graph
```

------------------------------------------------------------------------

## Emergency Recovery Checklist

If rebase breaks:

``` bash
git rebase --abort
git reflog
git reset --hard HEAD@{1}
```

------------------------------------------------------------------------

## Most Important Commands to Memorize

``` bash
git status
git diff
git add .
git rebase --continue
git rebase --abort
git log --oneline --graph --decorate --all
git reflog
git checkout --ours file
git checkout --theirs file
```

------------------------------------------------------------------------

End of guide.
