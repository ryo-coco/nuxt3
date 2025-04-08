<template>
  <!-- 全体を囲む箱（div）だよ -->
  <div>
    <!-- v-toolbarは画面の上に出るメニューバーみたいなものだよ -->
 <!-- メニューバーに表示されるタイトルだよ -->
<!-- 背景を紺色にして、周りに余白をつけているよ -->
  <!-- 影をつけて、浮き上がって見えるようにしているよ -->
    <v-toolbar
      title="kensyu5.vueの中⾝です。" 
      class="bg-indigo pa-8"  
      elevation="6"
    ></v-toolbar>
    
    <!-- v-containerは中身を整理するための箱だよ -->
    <v-container>
      <!-- v-btnはボタンを作るためのものだよ -->
      <v-btn title="ボタン" class="w-50 ma-2" elevation="6">  <!-- 幅を半分にして、周りに余白をつけて、影もつけているよ -->
        <!-- ボタンの中に、さらにボタンがあるよ。クリックすると数字が増えるよ -->
        <button @click="increment">カウント数を表⽰: {{ count }}</button>  <!-- クリックすると「increment」という命令を実行するよ -->
      </v-btn>
    </v-container>
    
    <!-- もう一つの箱を作っているよ -->
    <v-container>
      <!-- 家のアイコンがついたオレンジ色のボタンを作っているよ -->
      <v-btn icon="mdi-home" color="orange" class="text-h10"> Home </v-btn>  <!-- 「mdi-home」は家の形のアイコンだよ -->
    </v-container>
  </div>
</template>

<script setup lang="ts">
  // vueという部品箱から「ref」という道具を持ってくるよ
  import { ref } from "vue";
  
  // 「count」という名前の箱を作って、最初に0を入れておくよ
  // refは「参照」という意味で、この値が変わると画面も自動で変わるすごい箱だよ
  const count = ref(0);
  
  // 「increment」という名前の動きを作るよ
  // これはボタンを押したときに実行される命令だよ
  function increment() {
    count.value++;  // count.valueを1増やすよ（++は「1を足す」という意味）
    // refで作った箱の中身を変えるときは、必ず「.value」をつけるんだ！
  }
</script>