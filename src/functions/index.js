// it finds categories where category contains query
// returns array
const findInCategories = (query, categoryList) => {
  if (!categoryList || !categoryList.length) return false;

  query = query.toLowerCase();
  let array = [];

  categoryList.map((category) => {
    category.toLowerCase().includes(query) && array.push(category);
  });

  return array;
};

export { findInCategories };
