<template>
    <div class="row">
        <div class="col p-3">
            <h2>할일 추가</h2>
        </div>
    </div>
    <!-- <div class="row">
        
        <div class="col">
            
            <div class="form-group">
                <label htmlFor="todo">할일 :</label>
                <input type="text" class="form-control" id="todo" v-model="todoItem.todo" />
            </div>

            <div class="form-group">
                <label htmlFor="desc">설명 :</label>
                <textarea class="form-control" rows="3" id="desc" v-model="todoItem.desc"></textarea>
            </div>
            
            <div class="form-group">
                <button type="button" class="btn btn-primary m-1" @click="addTodoHandler">
                추 가
            
            </button>
                <button type="button" class="btn btn-primary m-1" @click="router.push('/todos')">
                취 소
            </button>
            

            
        </div>
        </div>
    </div> -->


    <v-form v-model="valid">
        <v-container>
            <v-row class="d-flex flex-column">
                <v-col>
                    <v-text-field v-model="todoItem.todo" label="제 목" hide-details required></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="todoItem.desc" label="내 용" hide-details required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="1">
                    <v-btn color="primary" rounded="lg" block prepend-icon="mdi-check-circle" @click="addTodoHandler">
                        추 가
                    </v-btn>
                </v-col>
                <v-col cols="1">
                    <v-btn color="warning" rounded="lg" block prepend-icon="mdi-close-circle"
                        @click="router.push('/todos')">
                        취 소
                    </v-btn>
                </v-col>
            </v-row>

        </v-container>
    </v-form>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
// import { useTodoListStore } from '@/stores/todoList.js';
import { useTodoListStore } from '@/stores/useTodoListStore.js';

// import { useTodoListStore } from '@/stores/todoList3.js';

const router = useRouter();
const { addTodo } = useTodoListStore();
const todoItem = reactive({ todo: "", desc: "" });

const addTodoHandler = () => {
    let { todo } = todoItem;
    if (!todo || todo.trim() === "") {
        alert('제목은 반드시 입력해야 합니다');
        return;
    }
    addTodo({ ...todoItem }, () => {
        router.push('/todos');
    });
};
</script>