<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import Table from "../components/table/Table.vue";
import Modal from "../components/templates/Modal.vue";
import { useProducts } from "../stores/products";

export default {
  components: {
    Table,
    Modal,
  },
  setup() {
    const route = useRoute();
    const categoryFromParams = route.query.category;
    console.log(categoryFromParams);

    const productsStore = useProducts();
    const state = reactive({
      categories: productsStore.categories,
      currentCategory: categoryFromParams
        ? categoryFromParams
        : productsStore.currentCategory,
      products: productsStore.products,
      showModal: false,
    });

    const changeCurrentCategory = (category = "") => {
      if (!category.length) {
        state.currentCategory = "all";
        return true;
      }
      state.currentCategory = category;
      return true;
    };
    const handleChangeCategory = (category) => {
      const allProducts = productsStore.products;
      if (category === "all" || !category) {
        changeCurrentCategory("all");
        state.products = allProducts;
        return true;
      }

      const filteredProducts = allProducts.filter((product) =>
        product.categories.includes(category)
      );
      changeCurrentCategory(category);
      state.products = filteredProducts;
    };

    return { handleChangeCategory, state, categoryFromParams };
  },
  beforeMount() {
    if (this.categoryFromParams)
      this.handleChangeCategory(this.categoryFromParams);
  },
};
</script>

<template>
  <div id="homepage">
    <header>
      <div>
        <h1 v-if="state.currentCategory === 'all' || !state.currentCategory">
          Wszystkie przedmioty
        </h1>
        <h1 v-else>Kategoria: {{ state.currentCategory }}</h1>
        <p>Ilość: {{ state.products.length }}</p>
      </div>
    </header>
    <ul class="categories-list">
      <li>
        <button
          @click="handleChangeCategory('all')"
          :class="{
            active: !state.currentCategory || state.currentCategory === 'all',
          }"
        >
          Wszystko
        </button>
      </li>
      <li v-for="(category, index) in state.categories" :key="index">
        <button
          @click="handleChangeCategory(category)"
          :class="{ active: state.currentCategory === category }"
        >
          {{ category }}
        </button>
      </li>
    </ul>

    <Table
      :products="state.products"
      class="table"
      @openFiltersModal="state.showModal = true"
    />
  </div>
</template>

<style lang="less" scoped>
#homepage {
  max-width: 1200px;
  margin: 0 auto;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.categories-list {
  padding: 2rem 0;
  display: flex;
  gap: 0.5rem;

  list-style: none;
  font-size: 0.75rem;

  overflow-x: auto;

  button {
    white-space: nowrap;
    padding: 4px 0.5rem;
    border-radius: 1rem;
    background-color: #0066ff20;
    color: #06f;

    border: 0;
    cursor: pointer;

    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #0066ff40;
    }
    &.active {
      background-color: #06f;
      color: white;
      &:hover {
        background-color: #05d;
      }
    }
  }
}
</style>
