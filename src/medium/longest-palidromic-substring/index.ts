export function longestPalindromeDb(s: string): string {
  if (s.length <= 1) return s;
  if (s.length == 2 && s[0] === s[s.length - 1]) return s;
  if (s.length == 2) return s[0] ?? "";

  const db: boolean[][] = [];
  for (const _ of s) {
    let row: boolean[] = [];
    for (const _ of s) {
      row.push(false);
    }

    db.push(row);
  }

  for (let i = 0; i < db.length; i++) {
    const row = db.at(i);
    if (row === undefined) continue;
    if (row[i] !== undefined) {
      row[i] = true;
    }
  }

  for (let i = 0; i < db.length - 1; i++) {
    const row = db.at(i);
    if (row === undefined) continue;
    if (row[i + 1] !== undefined) {
      row[i + 1] = s[i] === s[i + 1];
    }
  }

  for (let i = 2; i < db.length; i++) {
    for (let j = 0; (i + j) < db.length; j++) {
      db[j][i + j] = s[i + j] === s[j] && db[j + 1]![i + j - 1];
    }
  }

  let best_start = 0;
  let best_end = 0;

  for (let i = 0; i < db.length; i++) {
    for (let j = 0; j < db[i]!.length; j++) {
      if (db[i]![j] === true && (j - i + 1) > (best_end - best_start + 1)) {
        best_end = j;
        best_start = i;
      }
    }
  }

  return s.slice(best_start, best_end + 1);
};

export function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let b = i;
    let e = i;

    while (b >= 0 && e < s.length && s[b] === s[e]) {
      if ((end - start) < (e - b)) {
        start = b;
        end = e;
      }
      b--;
      e++;
    }
    b = i;
    e = i + 1;
    while (b >= 0 && e < s.length && s[b] === s[e]) {
      if ((end - start) < (e - b)) {
        start = b;
        end = e;
      }
      b--;
      e++;
    }
  }
  return s.slice(start, end + 1);
};