export function isCharacterWithNoId(value: any): boolean {
  if (!(typeof value === "object")) {
    return false;
  } else {
    let nbKeys = 0;
    for (const [key, valueAtKey] of Object.entries(value)) {
      nbKeys++;
      if ((key !== "name" && key !== "imageUrl") || nbKeys > 2) {
        return false;
      }
    }
    return true;
  }
}
