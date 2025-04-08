<template>
  <!-- <button @click="showAlert"> -->
  <button @click="onAddTodo">
  <v-btn color="primary" variant="outlined">Add</v-btn>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showAlert = () => {
  console.log("ボタンがクリックされました！");
};
// プロパティの定義
const props = defineProps({
  addTodo: Function
});
const onAddTodo = () => {
  props.addTodo();
};
</script>