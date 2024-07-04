<template>
  <!-- <li :class="todoItem.done ? 'list-group-item list-group-item-success' : 'list-group-item'">
    <span :class="todoItem.done ? 'todo-done pointer' : 'pointer'" @click="toggleDone(todoItem.id)">
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span class="float-end badge bg-secondary pointer m-1" @click="router.push(`/todos/edit/${todoItem.id}`)">
      편집</span>
    <span class="float-end badge bg-secondary pointer m-1" @click="deleteTodo(todoItem.id)">
      삭제</span>
  </li> -->

  <!-- <li>
    <span @click="toggleDone(todoItem.id)">
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span @click="router.push(`/todos/edit/${todoItem.id}`)">
      편집</span>
    <span @click="deleteTodo(todoItem.id)">
      삭제</span>
  </li> -->
  <!-- 
  <v-card variant="outlined" class="mx-auto" color="surface-variant" max-width="344">
    <span @click="toggleDone(todoItem.id)">
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span @click="router.push(`/todos/edit/${todoItem.id}`)">
      편집</span>
    <span @click="deleteTodo(todoItem.id)">
      삭제</span>

    <template v-slot:actions>
      <v-btn text="Button"></v-btn>
    </template>
  </v-card> -->


  <v-row>
    <v-col class="item_padding" cols="12">
      <v-card class="cards_inner" hover>
        <div class="card_item">
          <v-card-item>
            <v-card-title>


              {{ todoItem.todo }}
              {{ todoItem.done ? '(완료)' : '' }}
            </v-card-title>
          </v-card-item>

          <v-card-text>
            {{ todoItem.desc }}
          </v-card-text>
        </div>
        <div class="card_btn">
          <v-card-actions>
            <v-btn @click="toggleDone(todoItem.id)">완료</v-btn>
            <!-- <v-btn @click="router.push(`/todos/edit/${todoItem.id}`)">편집</v-btn> -->
            <v-btn @click="deleteTodo(todoItem.id)">삭제</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-col>

  </v-row>
</template>



<script setup>
import { useRouter } from 'vue-router';
// pinia에서 데이터 가져오기
import { useTodoListStore } from '@/stores/todoList.js';

defineProps({
  todoItem: { Type: Object, required: true }
});

const router = useRouter();
// 데이터 디스턱쳐링하기, 분해할당, 이 컴포넌트에서 쓸 것만 꺼내기
const todoListStore = useTodoListStore(); // 반환값이 객체임
const { deleteTodo, toggleDone } = todoListStore;



</script>


<style scoped>
/* .item_padding {
  padding: 8px;
} */
.cards_inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>