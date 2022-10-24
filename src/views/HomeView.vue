<script>
import { reactive, watch } from "vue";
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
      categories: [],
      products: data,
      showModal: false,
    });

    Object.keys(CATEGORIES.main).forEach((category) =>
      state.categories.push(CATEGORIES.main[category])
    );

    const handleChangeFilters = (category) => {
      state.filter = category;
      if (category === "all") {
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
      <h1 v-if="state.filter === 'all'">Wszystkie przedmioty</h1>
      <h1 v-else>Kategoria: {{ state.filter }}</h1>

      <Badge @click="state.showModal = true">
        Filtuj
        <Icon icon="heroicons:adjustments-horizontal" class="icon" />
      </Badge>
    </header>

    <Table :products="state.products" class="table" />

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
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon {
  font-size: 1rem;
}
.table {
  margin-top: 2rem;
}
</style>
