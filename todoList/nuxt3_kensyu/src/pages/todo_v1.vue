<template>
  <v-app>
    <v-app-bar color="primary">
      <template v-slot:title>
        <v-app-bar-title>TodoList</v-app-bar-title>
      </template>
    </v-app-bar>

    <v-main class="w-4/5 ">

      <v-container>
        <v-sheet class="mb-10">
          <v-row>
            <v-col class="d-flex align-center">
              <v-text-field cols="11" variant="outlined" density="comfortable" label="タスク名" v-model="taskName"
                hide-details></v-text-field>
              <v-btn cols="1" color="primary" variant="outlined" class="ma-2" @click="addTodo">追加</v-btn>
            </v-col>
          </v-row>
        </v-sheet>

        <v-divider thickness="5"></v-divider>
        <v-data-table :headers="headers" :items="items" :items-per-page="10"
          class="elevation-1 d-flex item-center mt-5">
          <template v-slot:item.taskname="{ item }">
            <div v-if="editingId === item.id">
              <v-text-field v-model="item.taskname" @blur="editingId = null" @keydown.enter="editingId = null" autofocus
                dense hide-details>
              </v-text-field>
            </div>
            <span v-else @click="startEditing(item.id)">{{ item.taskname }}</span>
          </template>
          <template v-slot:item.status="{ item }">
            <v-select variant="outlined" density="comfortable" v-model="item.status" label="status"
              :items="['未着手', '着手中', '完了']" hide-details></v-select>
          </template>
          <!-- <template v-slot:item.delete="{ item }">
          <v-btn color="error" hide-details>削除</v-btn>
        </template> -->
          <template v-slot:item.memo="{ item }">
            <v-textarea variant="outlined" density="comfortable" label="メモ" rows="1" class="w-100"
              hide-details></v-textarea>
          </template>
          <template v-slot:item.delete="{ item }">
            <div class="d-flex ga-2 align-center justify-center">
              <v-icon color="medium-emphasis" icon="mdi-delete" size="large" @click="remove(item.id)"></v-icon>
            </div>
          </template>
        </v-data-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

// const editingId = ref('')
const editingId = ref<number | null>(null)

// タスク名の入力値を保持する ref
const taskName = ref<string>('');

// Todo オブジェクトの配列を保持する ref
const todos = ref<Todo[]>([]);

// Todo オブジェクトの型定義
interface Todo {
  id: number,
  taskname: string,
  status: string,
  memo: string,
  delete: boolean
}
let cnt = 3; // ID のカウンタ

// 新しい Todo を追加する関数
const addTodo = () => {
  // 入力値が空でないかチェック（前後の空白を除去）    
  if (taskName.value.trim() !== '') {
    // 新しい Todo オブジェクトを作成
    let todo: Todo = {
      id: cnt,
      taskname: taskName.value.trim(),
      status: "未着手", // 初期状態は未完了
      memo: "",
      delete: false // 初期状態は編集不可
    };
    // todos 配列に新しい Todo を追加
    items.push(todo);
    // 入力フィールドをクリア
    taskName.value = '';

    cnt++; // ID のカウンタをインクリメント
  }
};


function startEditing(id: number) {
  editingId.value = id
}

function remove(id: number) {
  console.log(id);

  const index = items.findIndex((item) => item.id === id)
  items.splice(index, 1)
}

const headers = [
  { title: 'ID', key: 'id', align: 'start' },
  { title: 'タスク名', key: 'taskname' },
  { title: '状態', key: 'status' },
  { title: 'メモ', key: 'memo' },
  { title: '削除', key: 'delete' },
]
const items = reactive([
  {
    id: 1,
    taskname: '朝寝',
    status: '未着手',
    memo: '',
    delete: false
  },
  {
    id: 2,
    taskname: '昼寝',
    status: '未着手',
    memo: '',
    delete: false
  }
])
</script>
