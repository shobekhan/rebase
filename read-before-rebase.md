### Suppose you're rebasing dev012 onto develop:

git checkout dev012
git rebase develop

### Who is who

Current Change = content from rebasing branch (the branch on top of which you are rebasing mostly develop)
Incoming Change = is current branch (where you were, mostly the feature branch)
<<<<<<< HEAD
// content from develop
=======
// content from your dev012 commit
>>>>>>> abc123

During a rebase:

HEAD / ours = develop
Theirs = the commit from dev012 currently being replayed

This is important because during a rebase, ours/theirs are effectively reversed from what many people expect.

May be write down on a paper

### show file from develop branch 

git show :2:src/calculator.ts

### show file from dev012 branch

git show :3:src/calculator.ts

### During rebase or merge conflict if you want to find the authors who changed the file or part of the file

git blame -L 50,120 yourfile.ts

git blame yourfile.ts