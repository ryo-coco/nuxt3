<template>
  <v-card class="text-h2 bg-red"> kensyu3.vueの中⾝です。 </v-card>
  <v-card class="text-h3 bg-yellow-darken-2"> kensyu3.vueの中⾝です。 </v-card>
  <v-card class="text-h4 bg-blue"> kensyu3.vueの中⾝です。 </v-card>
  <v-card class="text-h5 bg-purple-lighten-4"> kensyu3.vueの中⾝です。 </v-card>
  <v-container>
  <button @click="showAlert">
  <v-btn color="primary mb-5" variant="outlined">ボタン</v-btn>
  <v-btn color="primary mb-5" >ボタン</v-btn>
  </button>
  <v-row>
  <v-col cols="2"> <v-btn color="primary">primary</v-btn> </v-col>
  <v-col cols="4"> <v-btn color="error" >error</v-btn> </v-col>
  <v-col cols="2"> <v-btn color="info" >info</v-btn></v-col>
  <v-col cols="4"> <v-btn color="success" >success</v-btn></v-col>
  
  </v-row>
  </v-container>
  <a v-bind:href="url" target="_blank">Vue.jsのサイトはこちら</a>
</template>
  <script setup lang="ts">
  import { ref } from "vue";
  const url = ref("https://vuejs.org/");
  const showAlert = () => {
  alert("ボタンがクリックされました！");
  };
  </script>
