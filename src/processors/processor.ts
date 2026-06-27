import { add } from "../lib/math";

export function processNumbers(numbers:number[]){

    return numbers.reduce(add,0);

}