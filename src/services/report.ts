import { capitalize } from "../lib/format";

export function generateReport(data:string[]){

    return `[REPORT] ${capitalize(data.join(","))}`;

}