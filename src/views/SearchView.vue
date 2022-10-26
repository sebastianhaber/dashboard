<template>
  <h2>
    Wyniki wyszukiwania dla: <span class="text-blue">{{ query }}</span>
  </h2>
  <div v-if="matchedCategories.length > 0" class="items-wrapper">
    <h3>Kategorie</h3>
    <ul class="categories">
      <li v-for="category in matchedCategories" :key="category">
        <Badge>
          <RouterLink :to="{ name: 'home', query: { category } }">
            {{ category }}
          </RouterLink>
        </Badge>
      </li>
    </ul>
  </div>
  <div v-if="matchedProducts.length > 0" class="items-wrapper">
    <h3>Produkty</h3>
    <ul class="products">
      <li v-for="(product, index) in matchedProducts" :key="index">
        <RouterLink :to="{ path: `/produkt/${product.id}` }">
          {{ product.name }} • {{ product.price }} • {{ product.quantity }} •
          {{ product.categories[0] }}
        </RouterLink>
      </li>
    </ul>
  </div>
  <div
    v-if="!matchedProducts.length && !matchedCategories.length"
    class="items-wrapper"
  >
    <p>Nie znaleziono żadnych wyników.</p>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Badge from "../components/utils/Badge.vue";
import { findInCategories } from "../functions";
import router from "../router";
import { useProducts } from "../stores/products";

export default {
  components: {
    Badge,
  },
  setup() {
    const productsStore = useProducts();
    const route = useRoute();
    const query = ref(route.params.query);

    // categories and products what were found by query
    const matchedCategories = ref([]);
    const matchedProducts = ref([]);

    watch(route, () => {
      query.value = route.params.query;
    });

    const showCategory = (category) => {
      router.push({
        path: "/",
        params: {
          category,
        },
      });
    };

    return {
      query,
      matchedCategories,
      matchedProducts,
      productsStore,
      showCategory,
    };
  },
  mounted() {
    this.matchedCategories = findInCategories(
      this.query,
      this.productsStore.categories
    );
    this.matchedProducts = this.productsStore.findProducts(this.query);
  },
  beforeUpdate() {
    this.matchedCategories = findInCategories(
      this.query,
      this.productsStore.categories
    );
    this.matchedProducts = this.productsStore.findProducts(this.query);
  },
};
</script>
<style lang="less">
h2 {
  span {
    font-weight: 700;
  }
}
.items-wrapper {
  margin-top: 2rem;
  h3 {
    font-weight: bold;
  }
  ul {
    margin-top: 1rem;
  }
}
.products {
  display: flex;
  flex-direction: column;
  max-width: 400px;

  list-style: none;

  li a {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #efefef;
    }
  }
}
.categories {
  display: flex;
  gap: 1rem;

  list-style: none;
}
</style>
