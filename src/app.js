const { formatMessage } = require("./utils/helpers");
const config = require("./config");

function startApp() {
    console.log(formatMessage("App started"));
    console.log("Mode:", config.mode);
}

startApp();