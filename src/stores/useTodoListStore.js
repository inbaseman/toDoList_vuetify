import { defineStore } from "pinia";

//1. owner는 더 이상 필요하지 않습니다.
//2. BASEURI도 필요하지 않습니다.

const STORAGE_KEY = 'todoListStore';

export const useTodoListStore = defineStore("todoList1", {
    // state 상태 정의(todoList, isLoading)
    state: () => {
        return {
            todoList: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
            isLoading: false
        };
    },
    // getters 읽기 전용의 게터, computed가 하는 일을 정의
    getters: {
        doneCount: (state) => {
            const filtered = state.todoList.filter((todoItem) => todoItem.done === true);
            return filtered.length;
        }
    },
    // actions 이벤트 등록, methods가 하는 일을 정의
    actions: {
        saveToLocalStorage() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todoList));
        },
        async fetchTodoList() {
            this.isLoading = true;
            try {
                const savedTodoList = JSON.parse(localStorage.getItem(STORAGE_KEY));
                if (savedTodoList) {
                    this.todoList = savedTodoList;
                } else {
                    alert('저장된 데이터가 없습니다.');
                }
                this.isLoading = false;
            } catch (error) {
                alert('데이터를 불러오는 중 에러가 발생했습니다: ' + error);
                this.isLoading = false;
            }
        },
        async addTodo({ todo, desc }, successCallback) {
            if (!todo || todo.trim() === "") {
                alert('할일은 반드시 입력해야 합니다');
                return;
            }
            this.isLoading = true;
            try {
                const id = Date.now(); // 간단한 ID 생성 방법
                this.todoList.push({ id, todo, desc, done: false });
                this.saveToLocalStorage();
                successCallback();
                this.isLoading = false;
            } catch (error) {
                alert('에러발생 :' + error);
                this.isLoading = false;
            }
        },
        async updateTodo({ id, todo, desc, done }, successCallback) {
            if (!todo || todo.trim() === "") {
                alert('할일은 반드시 입력해야 합니다');
                return;
            }
            this.isLoading = true;
            try {
                let index = this.todoList.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    this.todoList[index] = { id, todo, desc, done };
                    this.saveToLocalStorage();
                    successCallback();
                } else {
                    alert('Todo 변경 실패: 항목을 찾을 수 없습니다.');
                }
                this.isLoading = false;
            } catch (error) {
                alert('에러발생 :' + error);
                this.isLoading = false;
            }
        },
        async deleteTodo(id) {
            this.isLoading = true;
            try {
                let index = this.todoList.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    this.todoList.splice(index, 1);
                    this.saveToLocalStorage();
                } else {
                    alert('Todo 삭제 실패: 항목을 찾을 수 없습니다.');
                }
                this.isLoading = false;
            } catch (error) {
                alert('에러발생 :' + error);
                this.isLoading = false;
            }
        },
        async toggleDone(id) {
            this.isLoading = true;
            try {
                let index = this.todoList.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    this.todoList[index].done = !this.todoList[index].done;
                    this.saveToLocalStorage();
                } else {
                    alert('Todo 완료 변경 실패: 항목을 찾을 수 없습니다.');
                }
                this.isLoading = false;
            } catch (error) {
                alert('에러발생 :' + error);
                this.isLoading = false;
            }
        },
    }
});