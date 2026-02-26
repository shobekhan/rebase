const { formatMessage } = require("./utils/helpers");
const config = require("./config");

function startApp() {
    console.log(formatMessage("Main branch started"));
    
    if (!config.debug) {
        console.log("Running in safe mode");
    }
}

startApp();