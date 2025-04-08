<template>
  <!-- 編集ボタンのクリックイベントを処理する関数を設定 -->
  <button @click="onEditTodo">
  <!-- Vuetifyのボタンコンポーネントを使用。青色(info)で、アウトライン表示のスタイル -->
  <v-btn color="info" variant="outlined" >{{props.todos[props.id].isEdit ? '決定' : '編集'}}</v-btn>
  </button>
</template>

<script setup lang="ts">
// 親コンポーネントから受け取るプロパティを定義
// id: 編集対象のTODOアイテムのインデックス
// todos: TODOリスト全体の配列
const props = defineProps({
  id: Number,  // 編集対象のTODOのID
  todos: Array // TODOリストの配列
});

// 編集ボタンがクリックされたときの処理
const onEditTodo = () => {
  // バリデーションチェック
  if (props.todos === undefined || props.id === undefined) {
    // TODOリストが空の場合、またはidが不正な場合は何もしない
    console.log("TODOリストは空です！");
    return;
  }
  props.todos[props.id].isEdit = !props.todos[props.id].isEdit; // 編集フラグをトグル
};
</script>