<template>
  <!-- <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <span class="navbar-brand ps-2">TodoList App</span>
    <button class="navbar-toggler" type="button" @click="isNavShow = !isNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todos">
            TodoList
          </router-link>
        </li>
      </ul>
    </div>
  </nav> -->


  <!-- <nav>
    <span>TodoList App</span>
    <button class="navbar-toggler" type="button" @click="isNavShow = !isNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div>
      <ul>
        <li>
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todos">
            TodoList
          </router-link>
        </li>
      </ul>
    </div>
  </nav> -->

  <!-- <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        TodoList App
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Home</v-tab>
      <v-tab value="two">About</v-tab>
      <v-tab value="three">TodoList</v-tab>
      <v-tab value="four">Datepicker</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">

        <v-tabs-window-item value="one">
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <router-link class="nav-link" to="/about">
            About
          </router-link>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <router-link class="nav-link" to="/todos">
            TodoList
          </router-link>
        </v-tabs-window-item>

        <v-tabs-window-item value="four">
          <router-link class="nav-link" to="/date">
            Datepicker
          </router-link>
        </v-tabs-window-item>

      </v-tabs-window>
    </v-card-text>

  </v-card> -->


  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        TodoList App
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="#9FA8DA">
      <v-tab>
        <router-link class="nav-link" to="/build/">
          Home
        </router-link>
      </v-tab>
      <v-tab>
        <router-link class="nav-link" to="/build/about">
          About
        </router-link>
      </v-tab>
      <v-tab>
        <router-link class="nav-link" to="/build/todos">
          TodoList
        </router-link>
      </v-tab>
      <v-tab>
        <router-link class="nav-link" to="/build/date">
          Datepicker
        </router-link>
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<!-- <script setup>
import { ref } from 'vue';

const isNavShow = ref(false);
</script> -->

