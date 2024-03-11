<template>
  <!-- <MainView/> -->
  <loginView v-if="!isLogin" @login="login"/>
  <MainView v-if="isLogin"/>
</template>

<script setup lang="ts">
import MainView from './views/MainView.vue';
import loginView from './views/loginView.vue';
import { computed, ref } from "vue"

// import { RouterLink, RouterView } from 'vue-router'

const username = ref("");

const isLogin = computed(()=>{
  return username.value !== '';
})

const login = (userName: string): void => {
  username.value = userName;
}


</script>

<style scoped>

</style>
