export class Calculator {
  add(x: number, y: number): number {
    console.log("Main branch");
    return Math.round(x + y);
  }
}