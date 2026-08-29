export function normalizeName(name: string): string {
  return name.trim().replace(/\s+/g, " ").toUpperCase();
}

export function displayName(name: string): string {
  return normalizeName(name)
    .split(" ")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");
}

export function formatLabel(name: string): string {
  return `[USER] ${displayName(name)}`;
}