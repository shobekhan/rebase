function removeFromDep(dep, packageName) {
    if (dep && dep[packageName]) {
        delete dep[packageName];
    }
}