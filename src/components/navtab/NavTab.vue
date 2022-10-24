<template>
  <nav>
    <h2 class="logo"><RouterLink to="/">Dashboard</RouterLink></h2>
    <div class="routes">
      <RouterLink to="/szukaj" title="Wyszukiwarka"
        ><Icon icon="heroicons:magnifying-glass" class="icon" />
        <p>Szukaj</p>
      </RouterLink>
      <RouterLink to="/dodaj" title="Dodaj produkt"
        ><Icon icon="heroicons:plus" class="icon" />
        <p>Dodaj produkt</p></RouterLink
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
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  padding: 0 2rem;
}
.routes {
  display: flex;
  gap: 1rem;
  a {
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
  @media (max-width: 768px) {
    a {
      padding: 0.5rem;
    }
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
