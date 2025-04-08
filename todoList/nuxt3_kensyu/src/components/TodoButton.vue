<template>
  <button @click="showAlert">
  <v-btn color="primary" variant="outlined">Add</v-btn>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showAlert = () => {
  console.log("ボタンがクリックされました！");
};
</script>