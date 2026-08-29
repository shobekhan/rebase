export function logInfo(message: string): void {
  console.log(`[APP] ${message}`);
}

export function logError(message: string): void {
  console.error(`[APP ERROR] ${message}`);
}

export function logWarning(message: string): void {
  console.warn(`[APP WARNING] ${message}`);
}