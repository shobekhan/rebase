### To apply commits with git cherry-pick without creating a commit, use the --no-commit (or -n) option:

git cherry-pick -n <commit-hash>

git cherry-pick -n a1b2c3d11111111122333

#### Cherry-pick multiple commits without committing

git cherry-pick -n <commit1> <commit2> <commit3>

git cherry-pick -n 1234567^..89abcde

### If you want to abandon the cherry-pick operation:

git cherry-pick --abort

git reset --hard HEAD

### By default, git cherry-pick creates a commit automatically after applying the selected commit(s).

git cherry-pick <commit-hash>

### if you want to remove the cherry pick commit

git reset --hard HEAD~1