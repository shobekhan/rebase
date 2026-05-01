export function formatCurrency(value: number, locale: string = "en-US"): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
    }).format(value);
}