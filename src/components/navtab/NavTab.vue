<template>
  <nav>
    <h2 class="logo">Dashboard</h2>
    <div class="routes">
      <RouterLink to="/"
        ><Icon icon="heroicons:home" class="icon" />Strona główna</RouterLink
      >
      <RouterLink to="/szukaj"
        ><Icon
          icon="heroicons:magnifying-glass"
          class="icon"
        />Szukaj</RouterLink
      >
      <RouterLink to="/dodaj"
        ><Icon icon="heroicons:plus" class="icon" />Dodaj produkt</RouterLink
      >
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

export default {
  components: {
    RouterLink,
    Icon,
  },
};
</script>

<style lang="less" scoped>
nav {
  display: flex;
  flex-direction: column;

  max-width: 300px;
  width: 100%;
  height: 100vh;

  padding: 2rem;
}
.routes {
  margin-top: 2rem;
  a {
    color: inherit;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
    border-radius: 1rem;

    transition: background-color 0.2s;
    &:hover {
      background-color: #dedede;
    }
  }
}
h2.logo {
  padding: 0 1rem;
  font-weight: 700;
  font-size: 1.5rem;
}
.icon {
  font-size: 1.5rem;
}
</style>
