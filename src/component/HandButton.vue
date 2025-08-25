<script>

export default {
  props: ['handType'],
}

</script>

<template>
  <button :class="['play-hand-btn', handType.toLowerCase()]">
    {{ handType }}
  </button>
</template>

<style>

.play-hand-btn {
  background: none;
  color: white;

  height: 7em;
  width: 7em;

  margin-right: 20px; /*! REMOVE later */
  margin-bottom: 20px;

  border-radius: 50%;
  outline: 2px solid white;

  transition: box-shadow 0.15s, opacity 0.1s;
}
.play-hand-btn:hover {
  box-shadow: 0 0 30px;
}
.play-hand-btn:active {
  opacity: 0.8;
}

</style>