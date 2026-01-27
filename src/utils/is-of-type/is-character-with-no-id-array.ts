import { isCharacterWithNoId } from "./is-character-with-no-id";

export function isCharacterWithNoIdArray(value: any): boolean {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every(isCharacterWithNoId);
}
