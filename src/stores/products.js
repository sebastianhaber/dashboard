import { ref } from "vue";
import { defineStore } from "pinia";
import { mocked_data } from "../mocked/Data";

export const useProducts = defineStore("products", () => {
  const products = ref(mocked_data.products);
  // all or strict category
  const filter = ref("all");

  const setProducts = (newProducts) => {
    products.value = newProducts;
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
      id: products.value.length,
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

  const changeFilter = (category) => {
    category = category.toLowerCase();
    if (!category.length) {
      filter.value = "all";
      return true;
    }
    filter.value = category;
    return true;
  };

  return {
    products,
    filter,
    setProducts,
    addProduct,
    deleteProduct,
    changeFilter,
    editProduct,
    findProducts,
  };
});
