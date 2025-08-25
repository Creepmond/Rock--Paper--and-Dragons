<script>

import { randomIntegerRange } from '@/core/random.js';

export default {
  data() { return {
    hand: 0,
    result: 'Nothing has happened yet...',
    stat: {
      win: 0,
      lose: 0,
      tie: 0
    }
  }},
  methods: {
    playHand(arg) {
      this.hand = randomIntegerRange(1, 3);
      this.result = this.hand
    }
  }
}

</script>



<template>
  <h3>Rock, Paper, and Dragons</h3>

  <button @click="playHand('rock')">Rock</button>
  <button @click="playHand('paper')">Paper</button>
  <button @click="playHand('scissors')">Scissors</button>

  <h5 class="result">{{ result }}</h5>
  <div class="stat">
    <span class="win">
      {{ stat.win }}
    </span class="lose">
    <span>
      {{ stat.lose }}
    </span>
    <span class="tie">
      {{ stat.tie }}
    </span>
  </div>
</template>



<style>

button {
  margin-right: 5px;
}

</style>