<template>
  <Modal
    :show="showModal"
    @close="$emit('close')"
    header-text="Filtruj wg karegorii"
  >
    <template #header>
      <h3>Filtruj wg Kategorii</h3>
    </template>
    <template #body>
      <div class="badges-container">
        <Badge
          @click="changeFilters('all')"
          :class="{ selected: activeCategory === 'all' }"
          >Wszyskie przedmioty</Badge
        >
        <Badge
          v-for="(category, index) in categories"
          :key="index"
          @click="changeFilters(category)"
          :class="{ selected: activeCategory === category }"
        >
          {{ category }}
        </Badge>
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <Button @click="$emit('close')" class="ghost">Zamknij</Button>
      </div>
    </template>
  </Modal>
</template>
<script setup>
import Badge from "../utils/Badge.vue";
import Modal from "../templates/Modal.vue";
import Button from "../utils/Button.vue";

const props = defineProps({
  categories: Array,
  activeCategory: String,
  changeFilters: Function,
  showModal: Boolean,
});
</script>
<style lang="less" scoped>
.badges-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>
