<template>
  <!-- チェックボックスを追加する。 -->
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
    
    <!-- タスクリスト表示エリア -->
    <ul>
      <!-- todosリストの各要素をv-forでループ処理して表示 -->
      <li v-for="(todo, index) in todos" :key="index">
        <!-- タスク完了状態のチェックボックス - todo.isDoneと双方向バインディング -->
        <input type="checkbox" v-model="todo.isDone" />
        
        <!-- タスク名の表示 -->
        <span> {{ todo.name }}</span>
      </li>
    </ul>
    
    <!-- デバッグ用: 現在入力中のタスク名を表示 -->
    <p>{{ taskName }}</p>
    
    <!-- デバッグ用: 現在のTODOリスト全体を表示 -->
    <p>{{ todos }}</p>
  </div>
</template>

<script setup lang="ts">
  // Vue Composition APIのrefを使用してリアクティブな変数を作成
  import { ref } from 'vue';

  // TODOアイテムの型定義
  interface Todo {
    name: string;    // タスク名
    isDone: boolean; // 完了状態
  }

  // タスク名入力用のリアクティブな変数（空文字で初期化）
  const taskName = ref<string>('');
  
  // TODOリスト用のリアクティブな配列（空配列で初期化）
  const todos = ref<Todo[]>([]);

  // 新しいタスクを追加する関数
  const addTodo = () => {
    // 空白のみのタスクを防止するためにtrim()で両端の空白を削除して判定
    if (taskName.value.trim() !== '') {
      // 新しいTodoオブジェクトを作成
      let todo: Todo = {
        name: taskName.value.trim(), // 空白を取り除いたタスク名
        isDone: false                // 初期状態は未完了
      };
      todos.value.push(todo);      // TODOリストに追加
      taskName.value = '';         // 入力フィールドをクリア
    } 
  };
</script>