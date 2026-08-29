export function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

export function displayName(name: string): string {
  return normalizeName(name)
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}