const maybe: string | undefined = process.env.MAYBE;

// Non-null assertions should not be spaced.
const asserted = maybe!;
const spaced = maybe !;
const chained = maybe!.length;

// Logical NOT should be followed by a space.
const negated = ! maybe;
const unspaced = !maybe;

export { asserted, spaced, chained, negated, unspaced };
