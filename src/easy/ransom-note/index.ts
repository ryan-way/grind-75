export function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();

  for (const c of magazine) {
    const count = map.get(c) ?? 0;
    map.set(c, count + 1);
  }

  for (const c of ransomNote) {
    const count = map.get(c) ?? 0;
    if (count == 0) {
      return false;
    }

    map.set(c, count - 1);
  }
  return true;
};