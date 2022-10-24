<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.2s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 600px;
  width: 100%;

  margin: 0px auto;
  padding: 2rem;

  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.2s ease;
}

.modal-header h3 {
  margin-top: 0;
  font-weight: bold;
  color: #06f;
  cursor: default;
}

.modal-body {
  margin: 2rem 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
</style>
