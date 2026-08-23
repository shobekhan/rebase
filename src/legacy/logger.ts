export function log(message: string): void {
    console.log(`[LOG] ${message}`);
}

export function logError(error: Error): void {
    console.error(`[ERROR] ${error.message}`);
}