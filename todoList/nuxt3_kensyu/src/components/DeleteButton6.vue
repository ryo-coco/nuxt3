<template>
  <!-- 削除ボタンのクリックイベントを処理する関数を設定 -->
  <button @click="onDeleteTodo">
  <!-- Vuetifyのボタンコンポーネントを使用。赤色(error)で、アウトライン表示のスタイル -->
  <v-btn color="error" variant="outlined">Delete</v-btn>
  </button>
</template>

<script setup lang="ts">
// 親コンポーネントから受け取るプロパティを定義
// id: 削除対象のTODOアイテムのインデックス
// todos: TODOリスト全体の配列
const props = defineProps({
  id: Number,  // 削除対象のTODOのID
  todos: Array // TODOリストの配列
});

// 削除ボタンがクリックされたときの処理
const onDeleteTodo = () => {
  // バリデーションチェック
  if (props.todos === undefined || props.id === undefined) {
    // TODOリストが空の場合、またはidが不正な場合は何もしない
    console.log("TODOリストは空です！");
    return;
  }
  
  // デバッグ用のコンソール出力（現在はコメントアウト）
  // console.log("削除ボタンがクリックされました！" + props.id, props.todos[props.id].name);
  
  // 配列のspliceメソッドを使って、指定されたインデックス(id)の要素を1つ削除
  props.todos.splice(props.id, 1); // id番目の要素を削除する
};
</script>