<script>
  export default {
    data() { return {
      number: 0,
    }},
    methods: {
      increaseNumber() {
        number++;
      }
    }
  }
</script>

<template>
  <span>{{ number }}</span>
  <button @click="increaseNumber" />
</template>