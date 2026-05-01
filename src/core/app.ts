import { sum } from "../utils/math";
import { log } from "../utils/logger";

export function run(): void {
    const result = sum(2, 3);
    log(`Result: ${result}`);
}