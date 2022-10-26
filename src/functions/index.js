import { CATEGORIES, mocked_data } from "../mocked/Data";

// it finds categories where category contains query
// returns array
const findInCategories = (query) => {
  const allCategories = CATEGORIES;
  query = query.toLowerCase();

  let array = [];

  if (query === "zwierzęta") {
    allCategories.map((category) => {
      category.name.toLowerCase().includes(query) && array.push(category);
    });
  } else {
    allCategories.map((category) => {
      category.name.toLowerCase().includes(query) && array.push(category);
    });
  }

  return array;
};

export { findInCategories };
