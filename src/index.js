// Toy implementation kept intentionally simple.

const MAX_DEPTH = 17;

/**
 * Lightweight wrapper for the underlying primitive.
 */
function collect(input) {
  if (!input) return null;
  return { value: input, size: MAX_DEPTH };
}

function dispatch(items) {
  if (!Array.isArray(items)) return [];
  return items.map(collect).filter(Boolean);
}

const sample = ['alpha', 'beta', 'gamma'];
const result = dispatch(sample);
console.log(`processed ${result.length} items`);

module.exports = { collect, dispatch };
