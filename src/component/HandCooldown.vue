<script>
export default {
  props: {
    cooldown: Number,
  },
}
</script>

<template>
  <div v-if="cooldown > 0" class="hand-cooldown on-cooldown">
    <!--IMPORTANT! Remember to create a new thingymajig for toFixed considering toFixed has a rounding error-->
    On Cooldown: {{ cooldown.toFixed(1) }}s
  </div>
  <div v-else class="hand-cooldown">Pick any Hand!</div>
</template>

<style>
.hand-cooldown {
  cursor: default;

  background: hsl(0, 0%, 45%);
  box-shadow: inset -2px -2px 10px hsl(0, 0%, 25%);

  font-size: 0.9em;

  height: 2em;
  width: 12em;

  margin-bottom: 15px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.on-cooldown {
  background: hsl(0, 0%, 40%);
  box-shadow: inset -2px -2px 10px hsl(0, 0%, 20%);
}
</style>
