import { processNumbers } from "./processors/processor";
import { generateReport } from "./services/report";
import { AuthService } from "./services/authService";

const auth=new AuthService();

if(auth.login("admin")){
    console.log(generateReport([String(processNumbers([3,4]))]));
}