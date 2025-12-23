<template>
  <div>
    <h1>Vue Simple Counter</h1>
    <p>Value is:{{ count }}</p>
    <button @click="count++">+1</button>

  </div>
</template>



<script setup>
import {ref} from 'vue';
const count = ref(0);
// ref是响应式的 可以跟踪变量的变化
// template模板支持{{}}插入值 @click事件等
</script>
