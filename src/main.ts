import { processNumbers } from "./processors/processor";
import { generateReport } from "./services/report";
import { authenticate } from "./services/auth";
import { log } from "./utils/logger";

const nums = processNumbers([1,2,3]);

if(authenticate("admin")){
    log(generateReport([String(nums)]));
}