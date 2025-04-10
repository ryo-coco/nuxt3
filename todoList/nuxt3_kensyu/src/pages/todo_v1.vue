<template>
  <v-app>
    <v-container class="mt-16">
      <v-app-bar color="primary">
        <template v-slot:title>
          <v-app-bar-title>TodoList</v-app-bar-title>
        </template>
      </v-app-bar>
      <v-data-table :headers="headers" :items="items" :items-per-page="10" class="elevation-1 d-flex item-center">
        <template v-slot:item.taskname="{ item }">
          <div v-if="editingId === item.id">
            <v-text-field v-model="item.taskname" @blur="editingId = null" @keydown.enter="editingId = null" autofocus
              dense hide-details>
            </v-text-field>
          </div>
          <span v-else @click="startEditing(item.id)">{{ item.taskname }}</span>
        </template>
        <template v-slot:item.status="{ item }">
          <v-select v-model="item.status" label="status" :items="['未着手', '着手中', '完了']" hide-details></v-select>
        </template>
        <!-- <template v-slot:item.delete="{ item }">
          <v-btn color="error" hide-details>削除</v-btn>
        </template> -->
        <template v-slot:item.delete="{ item }">
          <div class="d-flex ga-2 align-center justify-center">
            <v-icon color="medium-emphasis" icon="mdi-delete" size="large" @click="remove(item.id)"></v-icon>
          </div>
        </template>
      </v-data-table>
    </v-container>

  </v-app>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

// const editingId = ref('')
const editingId = ref<number | null>(null)

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
  { title: '削除', key: 'delete' },
]
const items = reactive([
  {
    id: 1,
    taskname: '朝寝',
    status: '未着手',
    delete: false
  },
  {
    id: 2,
    taskname: '昼寝',
    status: '未着手',
    delete: false
  }
])
</script>
