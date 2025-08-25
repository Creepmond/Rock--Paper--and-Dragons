<script>

export default {
  props: {
    handType: String,
  },
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

  transition: box-shadow 0.15s, opacity 0.05s;
}

.play-hand-btn:hover:not(.play-hand-btn[disabled]) {
  box-shadow: 0 0 25px;
}

.play-hand-btn[disabled] {
  cursor: default;

  box-shadow: u;
  opacity: 0.5;
}

</style>