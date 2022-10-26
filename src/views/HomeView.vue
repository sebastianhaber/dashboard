<script>
import { reactive } from "vue";
import { CATEGORIES, mocked_data } from "../mocked/Data";
import Table from "../components/table/Table.vue";
import Modal from "../components/templates/Modal.vue";
import Badge from "../components/utils/Badge.vue";
import FiltersModal from "../components/molecules/FiltersModal.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Table,
    Modal,
    Badge,
    FiltersModal,
    Icon,
  },
  setup() {
    const data = mocked_data.products;
    const state = reactive({
      filter: "all",
      categories: CATEGORIES,
      products: data,
      showModal: false,
    });

    const handleChangeFilters = (category) => {
      state.filter = category;
      if (category === "all" || !category) {
        state.products = data;
      } else {
        state.products = data.filter((item) =>
          item.categories.includes(category)
        );
      }
    };

    return { handleChangeFilters, state };
  },
};
</script>

<template>
  <div id="homepage">
    <header>
      <div>
        <h1 v-if="state.filter === 'all'">Wszystkie przedmioty</h1>
        <h1 v-else>Kategoria: {{ state.filter }}</h1>
        <p>Ilość: {{ state.products.length }}</p>
      </div>

      <div class="badgeWrapper">
        <Badge @click="state.showModal = true">
          Filtuj
          <Icon icon="heroicons:adjustments-horizontal" class="icon" />
        </Badge>
      </div>
    </header>

    <Table
      :products="state.products"
      class="table"
      @openFiltersModal="state.showModal = true"
    />

    <FiltersModal
      :showModal="state.showModal"
      @close="state.showModal = false"
      :categories="state.categories"
      :changeFilters="handleChangeFilters"
      :activeCategory="state.filter"
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
  .badgeWrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
.icon {
  font-size: 1rem;
}
.table {
  margin-top: 2rem;
}
</style>
