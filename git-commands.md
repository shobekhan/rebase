git log --oneline --graph

git commit -am "Feature: personalize title"

### stages new, modified, and deleted files in the entire repository
git add --all

### stages new, modified, and deleted files only inside the current directory
git add .

## After fixing merge conflicts Correct sequence because the commit already exists
git add .
git rebase --continue

### For a single file
git add src/app.js
git rebase --continue

### git status
- Will show rebase status if rebase is going on
- Will show remaining git commits and already completed ones