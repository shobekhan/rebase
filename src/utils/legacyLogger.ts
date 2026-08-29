export function log(message: string): void {
  console.log(`[MAIN] ${new Date().toISOString()} ${message}`);
}