<script lang="ts" setup>
const props = defineProps(['event', 'time'])
</script>

<template>
  <div>
    Hello {{ props.event }} at {{ props.time }}
  </div>
</template>
