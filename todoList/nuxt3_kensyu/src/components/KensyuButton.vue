<template>
  <button @click="showAlert">
  <v-btn color="primary" variant="outlined">ボタン</v-btn>
  </button>
  </template>
  <script setup lang="ts">
  const showAlert = () => {
  alert("ボタンがクリックされました！");
  };
  </script>