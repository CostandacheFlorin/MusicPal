export const convertToDropdownOptions = (
  arr: string[]
): { value: string; label: string }[] =>
  arr.map((item) => ({ value: item, label: item }));
