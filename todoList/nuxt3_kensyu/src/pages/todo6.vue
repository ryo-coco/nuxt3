<template>
  <!-- 削除ボタンを追加する -->
  <div>
    <!-- タイトルの表示 -->
    <h2>TODO List</h2>
    
    <!-- フォーム部分：submit イベントのデフォルト動作を防止する -->
    <form v-on:submit.prevent>
      <!-- タスク入力フィールド：入力内容を taskName に双方向バインディング -->
      <input type="text" class="border border-black" placeholder="入力してね" v-model="taskName"/>
      
      <!-- 追加ボタンコンポーネント：addTodo 関数を props として渡す -->
      <TodoButton3 :add-todo="addTodo" />
    </form>
    
    <!-- TODO リストの表示部分 -->
    <ul>
      <!-- todos 配列の各要素をループし、index も取得する -->
      <li v-for="(todo, index) in todos" :key="index">
        <!-- チェックボックス：todo.isDone と双方向バインディング -->
        <input type="checkbox" v-model="todo.isDone" />
        
        <!-- タスク名の表示：isDone が true なら取り消し線を適用 -->
        <span :style="{ textDecoration: todo.isDone ? 'line-through' : 'none' }"> {{ todo.name }}</span>
        
        <!-- 削除ボタンコンポーネント：index と todos 配列を props として渡す -->
        <DeleteButton6 :id="index" :todos="todos"/> 
      </li>
    </ul>
    
    <!-- デバッグ用表示：現在の入力値と todos 配列の内容を表示 -->
    <p>{{ taskName }}</p>
    <p>{{ todos }}</p>
  </div>
</template>

<script setup lang="ts">
 import { ref } from 'vue'; // ref を import して reactive な状態を作成

// Todo オブジェクトの型定義
interface Todo {
  name: string;  // タスク名
  isDone: boolean; // 完了状態のフラグ
}

// タスク名の入力値を保持する ref
const taskName = ref<string>('');

// Todo オブジェクトの配列を保持する ref
const todos = ref<Todo[]>([]);

// 新しい Todo を追加する関数
const addTodo = () => {
  // 入力値が空でないかチェック（前後の空白を除去）    
  if (taskName.value.trim() !== '') {
    // 新しい Todo オブジェクトを作成
    let todo: Todo = {
      name: taskName.value.trim(),
      isDone: false // 初期状態は未完了
    };
    // todos 配列に新しい Todo を追加
    todos.value.push(todo);
    // 入力フィールドをクリア
    taskName.value = ''; 
  } 
};
</script>