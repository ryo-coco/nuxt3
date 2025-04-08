<template>
  <!-- template（てんぷれーと）の部分：画面に表示される部分だよ -->
  <!-- v-appは、アプリ全体を包む箱みたいなもの。背景を薄い緑色にしているよ -->
  <v-app class="bg-lime-accent-1">
    <!-- v-sheetは紙みたいなもので、その中に文字を書いているよ -->
    <v-sheet class="text-h3 bg-lime-accent-1">
        <!-- 画面に「カウンター：0 / 0」みたいに表示されるよ -->
        カウンター：{{ count }} / {{ ceiling }}
        <!-- {{ count }}は今の数字、{{ ceiling }}は今の数字を10の単位に切り上げた数字だよ -->
      <!-- ボタンを作っているよ。押すと数字が増えるよ -->
<!-- ボタンを押したときに「onclick」という命令を実行するよ -->
<!-- ボタンには「+」という記号が書かれているよ -->
<!-- ボタンを赤くして、少し左に余白を作っているよ -->
<input
        type="button"
        @click="onclick"  
        value="+"         
        class="custom-button bg-red ml-5 px-5"  
      />
    </v-sheet>
  </v-app>
</template>
      

<script setup>
  // piniaという「お菓子の箱」からデータを取り出すための道具を持ってくるよ
  import { storeToRefs } from "pinia";
  // counterという名前のお菓子の箱を持ってくるよ
  import { useCounterStore } from "../store/counter";
  
  // お菓子の箱を開けるよ
  const store = useCounterStore();
  
  // 箱の中から「count」（今の数字）と「ceiling」（切り上げた数字）を取り出すよ
  const { count, ceiling } = storeToRefs(store);
  
  // ボタンを押したときの動きを決めるよ
  // ボタンを押すと、数字を1つ増やす「increment」という命令を実行するよ
  const onclick = () => {
    store.increment();
  };
</script>