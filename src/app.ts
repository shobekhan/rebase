import { sum } from "./math";
import { log } from "./logger";

export function run(): void {
    const result = sum(2, 3);
    log(`Result: ${result}`);
}