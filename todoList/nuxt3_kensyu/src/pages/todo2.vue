<template>
  <div>
    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <input type="text" class="border border-black" placeholder="入力してね" v-model="taskName"/>
      <TodoButton />
    </form>
    <p>{{ taskName }}</p>
  </div>
  </template>
  <script setup lang="ts">
    const taskName = ref<string>('');
  </script>