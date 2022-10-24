<template>
  <button class="badge" @click="$emit('click')">
    <slot />
  </button>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.badge {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: transparent;

  border: 2px solid #06f;
  border-radius: 1rem;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0066ff20;
  }

  &.selected {
    background-color: #06f;
    color: white;
    border-color: transparent;
    &:hover {
      background-color: #05d;
    }
  }
}
</style>
