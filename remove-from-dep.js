function removeFromDep(dep, packageName) {
    // call some external api
    if (dep && dep[packageName]) {
        delete dep[packageName];
    }
}