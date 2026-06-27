import { add } from "../utils/math";

export function processNumbers(numbers: number[]) {
    return numbers.reduce(add);
}