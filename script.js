function deepEquals(a, b) {
  // Check for strict equality
  if (a === b) {
    return true;
  }

  // Check if values are of the same type
  if (typeof a !== typeof b) {
    return false;
  }

  // Handle NaN equality
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  // Check for null and undefined equality
  if (a === null || a === undefined) {
    return b === null || b === undefined;
  }

  // Check for array equality
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  // Check for object equality
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEquals(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  // All other cases, values are not equal
  return false;
}

module.exports = deepEquals;
