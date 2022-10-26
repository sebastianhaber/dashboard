import { ref } from "vue";
import { defineStore } from "pinia";
import { CATEGORIES, mocked_data } from "../mocked/Data";

export const useProducts = defineStore("products", () => {
  const products = ref(mocked_data.products);
  const categories = ref(CATEGORIES);

  // products
  const setProducts = (newProducts) => {
    products.value = newProducts;
    return true;
  };
  const resetProducts = () => {
    products.value = mocked_data.products;
    return true;
  };
  const addProduct = ({
    name = "",
    imageUrl = "https://picsum.photos/200",
    price = 0,
    quantity = 0,
    categories = [],
  }) => {
    const newProduct = {
      id: products.value.length + 1,
      name,
      imageUrl,
      price,
      quantity,
      categories,
    };
    products.value = [...products.value, newProduct];
    return true;
  };
  const deleteProduct = (id) => {
    const newArray = products.value.filter((el) => el.id !== id);
    products.value = newArray;
    return true;
  };
  const editProduct = ({ id, name, imageUrl, price, quantity, categories }) => {
    if (!id) return false;

    let product = products.value.filter((el) => el.id === id);
    const productIndex = products.value.findIndex((el) => el.id === id);

    product = { ...product, name, imageUrl, price, quantity, categories };
    products.value[productIndex] = product;

    return true;
  };
  const findProducts = (value) => {
    let array = [];

    products.value.forEach(
      (el) =>
        el.name.toLowerCase().includes(value.toLowerCase()) && array.push(el)
    );
    return array;
  };

  // categories
  const addCategoryToProduct = (category = "", product) => {
    const categoryUpperCase =
      category[0].toUpperCase() + category.slice(1, category.length);
    const updatedProduct = {
      ...product,
      categories: [...product.categories, categoryUpperCase],
    };
    const productId = product.id;

    // add category to Categories List
    if (!categories.includes(category))
      categories.value = [...categories.value, category];

    // assign updated product
    products.value.find((element) => {
      if (element.id === productId) {
        element = updatedProduct;
      }
    });
    return true;
  };
  const removeCategoryFromProduct = (category = "", product) => {
    const categories = product.categories;
    const categoriesWithoutElement = categories.filter(
      (element) => element !== category
    );

    const newProduct = { ...product, categories: categoriesWithoutElement };
    const productId = product.id;

    products.value.find((element) => {
      if (element.id === productId) element = newProduct;
    });
    return true;
  };

  return {
    products,
    categories,
    setProducts,
    addProduct,
    deleteProduct,
    editProduct,
    findProducts,
    resetProducts,
    addCategoryToProduct,
    removeCategoryFromProduct,
  };
});
