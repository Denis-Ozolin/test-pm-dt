const getUniqValue = array =>
  array.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), []);

const getFilteredArray = (array, id) => array.filter(item => item !== id);

export { getUniqValue, getFilteredArray };
