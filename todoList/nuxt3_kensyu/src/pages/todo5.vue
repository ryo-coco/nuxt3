<template>
  <!-- 完了済みのTODOアイテムに取り消し線を引く機能を実装 -->
  <div>
    <!-- リストのタイトル -->
    <h2>TODO List</h2>
    
    <!-- フォーム：submit イベントが発生したときのリロードを防止 -->
    <form v-on:submit.prevent>
      <!-- タスク入力フィールド：黒い枠線のある入力欄でtaskNameと双方向バインディング -->
      <input type="text" class="border border-black" placeholder="入力してね" v-model="taskName"/>
      
      <!-- タスク追加ボタンコンポーネント：addTodo関数を子コンポーネントに渡す -->
      <TodoButton3 :add-todo="addTodo" />
    </form>
    
    <!-- TODOリスト表示部分 -->
    <ul>
      <!-- todos配列の各アイテムをループして表示、indexも取得してキーとして使用 -->
      <li v-for="(todo, index) in todos" :key="index">
        <!-- チェックボックス：todo.isDoneプロパティと双方向バインディング -->
        <input type="checkbox" v-model="todo.isDone" />
        
        <!-- タスク名表示：isDoneがtrueなら取り消し線、falseなら通常表示に条件付きスタイル適用 -->
        <span :style="{ textDecoration: todo.isDone ? 'line-through' : 'none' }"> {{ todo.name }}</span>
      </li>
    </ul>
    
    <!-- デバッグ用：現在の入力値を表示 -->
    <p>{{ taskName }}</p>
    
    <!-- デバッグ用：現在のTODOリスト全体を表示 -->
    <p>{{ todos }}</p>
  </div>
</template>

<script setup lang="ts">
 import { ref } from 'vue'; // Vueのリアクティブシステムからrefをインポート

// TODOアイテムの型定義
interface Todo {
  name: string;   // タスクの名前
  isDone: boolean; // タスクの完了状態
}

// タスク名の入力値を保持するリアクティブ変数
const taskName = ref<string>('');

// TODOリスト配列を保持するリアクティブ変数（Todo型の配列）
const todos = ref<Todo[]>([]);

// 新しいTODOを追加する関数
const addTodo = () => {
  // 入力値が空白でないか確認（前後の空白を削除して判定）    
  if (taskName.value.trim() !== '') {
    // 新しいTodoオブジェクトを作成
    let todo: Todo = {
      name: taskName.value.trim(), // 空白を除去したタスク名
      isDone: false                // 初期状態は未完了
    };
    // todosリアクティブ配列に新しいTodoを追加
    todos.value.push(todo);
    // 入力フィールドをクリア
    taskName.value = ''; 
  } 
};
</script>