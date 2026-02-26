const config = require("./config");

function start() {
    console.log("Main application started");
    console.log("Environment:", config.env);
}

start();