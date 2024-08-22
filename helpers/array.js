
import { titleCase } from '~/helpers/string';

/**
 * Exclude elements that occur in one array from another
 *
 * @param {Array} excludeArray The array of elements to exclude
 * @param {Array} arrayToFilter The array of elements to filter
 * @returns The resulting array
 */
export const excludeArrayItems = (excludeArray, arrayToFilter) => {
  const resultArray = arrayToFilter.slice();

  for (let item of excludeArray) {
    const index = resultArray.indexOf(item);

    if (index !== -1) {
      resultArray.splice(index, 1);
    }
  }

  return resultArray;
};

/**
 * Convert an array of values to an array of objects that
 * can be used as the options for any Select component
 *
 * @param {Array} arr The array to convert
 * @returns The resulting array
 */
export const createSelectOptions = (arr) => {
  return structuredClone(arr).map((item) => ({
    label: titleCase(item),
    value: item,
  }));
};

/**
 * Filter out only unique elements from an array
 *
 * @param {Array} arr The array of elements
 * @returns The array of only unique elements
 */
export const uniqueElements = (arr) => {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
};
