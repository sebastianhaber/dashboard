<script>
import { ref } from "vue";
import { CATEGORIES, mocked_data } from "../mocked/Data";
import Table from "../components/table/Table.vue";

export default {
  components: {
    Table,
  },
  setup() {
    const filter = ref("all");
    const categories = ref([]);
    const products = ref(mocked_data.products);

    Object.keys(CATEGORIES.main).forEach((category) =>
      categories.value.push(CATEGORIES.main[category])
    );

    const handleChangeFilters = (category) => {
      filter.value = category;
    };

    return { handleChangeFilters, filter, categories, products };
  },
};
</script>

<template>
  <div id="homepage">
    <h1 v-if="filter === 'all'">Wszystkie przedmioty</h1>
    <h1 v-else>Kategoria: {{ filter }}</h1>

    <button
      v-for="(category, index) in categories"
      :key="index"
      @click="handleChangeFilters(category)"
    >
      {{ category }}
    </button>

    <Table :products="products" />
  </div>
</template>
