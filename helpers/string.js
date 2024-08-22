
export const ucFirst = (str) => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const titleCase = (str) => {
  return str.split(' ').map((s) => ucFirst(s)).join(' ');
};

