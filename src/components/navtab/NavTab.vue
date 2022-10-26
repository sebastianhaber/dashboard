<template>
  <nav>
    <h2 class="logo"><RouterLink to="/">Dashboard</RouterLink></h2>
    <div class="routes">
      <button title="Wyszukiwarka" @click="searchModalOpen = true">
        <Icon icon="heroicons:magnifying-glass" class="icon" />
        <p>Szukaj</p>
      </button>
      <RouterLink to="/dodaj" title="Dodaj produkt"
        ><Icon icon="heroicons:plus" class="icon" />
        <p>Dodaj produkt</p></RouterLink
      >
    </div>
  </nav>
  <SearchModal :showModal="searchModalOpen" @close="searchModalOpen = false" />
</template>

<script>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import SearchModal from "../molecules/SearchModal.vue";

export default {
  components: {
    RouterLink,
    Icon,
    SearchModal,
  },
  setup() {
    const searchModalOpen = ref(false);

    return { searchModalOpen };
  },
};
</script>

<style lang="less" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
}
.routes {
  display: flex;
  gap: 1rem;
  a,
  button {
    display: flex;
    align-items: center;
    gap: 1rem;

    border: 0;
    background-color: transparent;

    padding: 0.5rem 1rem;
    border-radius: 1rem;

    cursor: pointer;

    transition: background-color 0.2s;
    &:hover {
      background-color: #dedede;
    }
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    p {
      display: none;
    }
  }
}
h2.logo {
  font-size: 1.5rem;
  a {
    font-weight: 700;
  }
}
.icon {
  font-size: 1.5rem;
}
</style>
