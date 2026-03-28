export async function compareHash(
  plain: string,
  hash: string
): Promise<boolean> {
  return plain === hash;
}