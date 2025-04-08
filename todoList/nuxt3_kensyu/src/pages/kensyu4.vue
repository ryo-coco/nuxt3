<template>
  <div class="text-h3">kensyu4.vueの中⾝です。</div>
  <section>
  <v-sheet class="bg-pink blue">
  <input class="bg-indigo my-5" type="text" v-model="inputNameModel" />
  <p>{{ inputNameModel }}</p>
  </v-sheet>
  </section>
  </template>
  <script setup lang="ts">
  import { ref } from "vue";
  const inputNameModel = ref("⽥中");
  </script>