<template>
  <!-- 追加ボタンでタスクを配列に追加する。 -->
  <div>
    <!-- アプリケーションのタイトル -->
    <h2>TODO List</h2>
    
    <!-- 新しいタスク追加フォーム（submitイベントの通常の動作を防止） -->
    <form v-on:submit.prevent>
      <!-- タスク名入力フィールド - v-modelでtaskName変数と双方向バインディング -->
      <input type="text" class="border border-black" placeholder="入力してね" v-model="taskName"/>
      
      <!-- タスク追加ボタンコンポーネント - addTodo関数をpropsとして渡している -->
      <TodoButton3 :add-todo="addTodo" />
    </form>
    
    <!-- デバッグ用: 現在入力中のタスク名を表示 -->
    <p>{{ taskName }}</p>
    
    <!-- デバッグ用: 現在のTODOリスト全体を表示 -->
    <p>{{ todos }}</p>
  </div>
</template>

<script setup lang="ts">
  // Vue Composition APIのrefを使用してリアクティブな変数を作成
  import { ref } from 'vue';

  // タスク名入力用のリアクティブな変数（空文字で初期化）
  const taskName = ref<string>('');
  
  // TODOリスト用のリアクティブな配列（空配列で初期化）
  // こちらのバージョンでは、Todoオブジェクトではなく単純な文字列の配列を使用
  const todos = ref<string[]>([]);

  // 新しいタスクを追加する関数
  const addTodo = () => {
    // 空白のみのタスクを防止するためにtrim()で両端の空白を削除して判定
    if (taskName.value.trim() !== '') {
      // 文字列をそのままtodos配列に追加
      todos.value.push(taskName.value.trim());
      taskName.value = '';  // 入力フィールドをクリア
    } 
  };
</script>