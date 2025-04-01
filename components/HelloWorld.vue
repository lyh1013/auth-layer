<script setup lang="ts">
const { authLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ authLayer }}</pre>
  </div>
</template>
