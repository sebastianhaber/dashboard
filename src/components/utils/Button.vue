<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>
<style lang="less" scoped>
.button {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: transparent;

  border: 2px solid transparent;
  border-radius: 1rem;

  cursor: pointer;
  transition: all 0.2s ease;
}
.primary {
  background-color: #06f;
  color: white;
  &:hover {
    background-color: #05d;
  }
}
.outline {
  border-color: #06f;
  &:hover {
    background-color: #0066ff20;
  }
}
.ghost {
  &:hover {
    background-color: #0066ff20;
  }
}
</style>
