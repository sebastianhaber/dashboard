<template>
  <table class="table">
    <thead class="thead">
      <td class="thead__id" title="Sortuj po ID">
        <button @click="handleSortBy('id')">
          <p>ID</p>
          <Icon
            icon="heroicons:chevron-up"
            class="icon"
            v-if="sort.by === 'id'"
            :class="{ down: sort.ascending }"
          />
        </button>
      </td>
      <td class="thead__image">Obraz</td>
      <td class="thead__name">Nazwa</td>
      <td class="thead__price" title="Sortuj po Cenie">
        <button @click="handleSortBy('price')">
          <p>Cena</p>
          <Icon
            icon="heroicons:chevron-up"
            class="icon"
            v-if="sort.by === 'price'"
            :class="{ down: sort.ascending }"
          />
        </button>
      </td>
      <td class="thead__qty" title="Sortuj po Ilości w magazynie">
        <button @click="handleSortBy('qty')">
          <p>Ilość</p>
          <Icon
            icon="heroicons:chevron-up"
            class="icon"
            v-if="sort.by === 'qty'"
            :class="{ down: sort.ascending }"
          />
        </button>
      </td>
      <td class="thead__category">
        <button @click="$emit('openFiltersModal')">Kategoria</button>
      </td>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id" class="row">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.categories[0] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { Icon } from "@iconify/vue";
import { ref, toRefs, watch } from "vue";
export default {
  name: "Table",
  props: ["products"],
  components: {
    Icon,
  },
  setup(props) {
    const { products } = toRefs(props);
    const data = ref(products.value);

    watch(products, () => {
      data.value = products.value;
    });

    // current sorting status
    const sort = ref({
      by: "id",
      ascending: true,
    });

    // sort items
    const handleSortBy = (value) => {
      let sortedArray = [];
      if (sort.value.by === value) {
        sort.value.ascending = !sort.value.ascending;
      } else {
        sort.value = {
          by: value,
          ascending: true,
        };
      }

      switch (value) {
        case "id":
          sortedArray = products.value.sort((a, b) =>
            sort.value.ascending
              ? Number(a.id) - Number(b.id)
              : Number(b.id) - Number(a.id)
          );
          break;
        case "price":
          sortedArray = products.value.sort((a, b) =>
            sort.value.ascending
              ? Number(a.price) - Number(b.price)
              : Number(b.price) - Number(a.price)
          );
          break;
        case "qty":
          sortedArray = products.value.sort((a, b) =>
            sort.value.ascending
              ? Number(a.quantity) - Number(b.quantity)
              : Number(b.quantity) - Number(a.quantity)
          );
          break;
        default:
          break;
      }
      data.value = sortedArray;
    };

    return {
      handleSortBy,
      data,
      sort,
    };
  },
};
</script>

<style lang="less" scoped>
.table {
  cursor: pointer;
  border-collapse: collapse;
  border-radius: 0.5rem;
  overflow: hidden;
  td {
    text-align: center;
  }
}
.thead {
  background-color: #ececec;
  td {
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #dcdcdc;
    }
  }
  &__id {
    min-width: 100px;
  }
  &__image {
    min-width: 70px;
  }
  &__name,
  &__category {
    min-width: 200px;
  }
  &__price {
    min-width: 170px;
  }
  &__qty {
    min-width: 100px;
  }
  button {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 0;
    border: 0;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
}
.row {
  user-select: none;
  transition: background-color 0.2s;
  td {
    padding: 1rem 0;
  }
  &:hover {
    background-color: #ececec;
  }
}
.icon {
  display: block;
  width: 0.75rem;

  transition: transform 0.2s ease;
  &.down {
    transform: rotate(180deg);
  }
}
</style>
