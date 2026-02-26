const config = require("./config");

function start() {
    console.log("App started");
    console.log("Environment:", config.env);
}

start();