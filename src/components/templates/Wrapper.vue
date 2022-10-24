<template lang="">
  <section>
    <slot />
  </section>
</template>
<style lang="less" scoped>
section {
  width: 100%;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
}
</style>
