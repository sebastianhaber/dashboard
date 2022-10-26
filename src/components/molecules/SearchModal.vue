<template>
  <Modal :show="showModal" @close="$emit('close')">
    <template #header>
      <h3>Wyszukaj czegokolwiek</h3>
    </template>
    <template #body>
      <form class="input" @submit.prevent="handleSearch($emit('close'))">
        <input
          type="search"
          id="search"
          v-model="searchValue"
          placeholder="Szukaj czegokolwiek..."
          autofocus
        />
        <Button type="submit" class="primary">Szukaj</Button>
      </form>
    </template>
    <template #footer>
      <div></div>
    </template>
  </Modal>
</template>
<script>
import { ref } from "vue";
import Modal from "../templates/Modal.vue";
import Button from "../utils/Button.vue";
import router from "../../router";

export default {
  props: {
    showModal: Boolean,
  },
  components: {
    Modal,
    Button,
  },
  setup() {
    const searchValue = ref("");

    const handleSearch = (closeModal) => {
      router.push(`/szukaj/${searchValue.value}`);
      closeModal;
    };

    return {
      searchValue,
      handleSearch,
    };
  },
};
</script>
<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: flex-end;
}
.input {
  display: flex;
  gap: 1rem;
  button {
    padding: 0.5rem 2rem;
  }
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 2px solid gray;
    border-radius: 1rem;

    outline: none;
    &:focus {
      border-color: #06f;
    }
  }
}
</style>
