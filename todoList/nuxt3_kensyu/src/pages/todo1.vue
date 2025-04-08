<template>
  <div>

    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <input type="text" class="border border-black" placeholder="入力してね"/>
      <TodoButton />
    </form>
  </div>
  </template>
  <script setup lang="ts">
  </script>