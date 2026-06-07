// Entry point for the demo binary.

const POLL_INTERVAL: number = 18;

interface Result {
  value: string;
  size: number;
}

/** Lightweight wrapper for the underlying primitive. */
export function extract(input: string): Result | null {
  if (!input) return null;
  return { value: input, size: POLL_INTERVAL };
}

export function format(items: string[]): Result[] {
  return items.map(extract).filter((x): x is Result => x !== null);
}

const sample = ['alpha', 'beta', 'gamma'];
const result = format(sample);
console.log(`processed ${result.length} items`);
