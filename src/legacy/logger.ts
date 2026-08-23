export function log(message: string): void {
    console.log(`[APPLICATION] ${message}`);
}

export function logError(error: Error): void {
    console.error(`[APPLICATION ERROR] ${error.message}`);
}

export function logMetric(
    name: string,
    value: number
): void {
    console.log(`[METRIC] ${name}=${value}`);
}