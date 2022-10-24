<script setup>
import { RouterView } from "vue-router";
import NavTab from "./components/navtab/NavTab.vue";
import Wrapper from "./components/templates/Wrapper.vue";
</script>

<template>
  <div id="main">
    <NavTab />
    <Wrapper>
      <RouterView />
    </Wrapper>
  </div>
</template>
