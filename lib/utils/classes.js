/**
 * @param {string} variant the variant to prepend
 * @param {string} classString the original class string
 * @returns class string with variant prepended to every individual class
 */
export function prependVariant(variant, classString) {
  return classString
    .split(" ")
    .map((s) => variant + ":" + s)
    .join(" ");
}
