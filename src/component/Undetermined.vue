<script>
import HandButton from '@/component/HandButton.vue'
import HandCooldown from '@/component/HandCooldown.vue'
import ResultStat from '@/component/ResultStat.vue'

import { tickrate } from '../config.js'

export default {
  data() {
    return {
      handType: ['Rock', 'Paper', 'Scissors'],
      hand: 0,
      botHand: 0,
      result: 0,
      stat: {
        win: 0,
        lose: 0,
        tie: 0,
        total_games: 0,
        wl_ratio: 0.5,
      },
      cooldown: 0,
    }
  },
  components: {
    HandButton,
    HandCooldown,
    ResultStat,
  },
  computed: {
    onCooldown() {
      return this.cooldown > 0
    },
    resultMessage() {
      const hand = translate(this.hand)
      const botHand = translate(this.botHand)

      if (this.stat.total_games === 0) return 'Nothing has happened yet.'

      switch (this.result) {
        case -1:
          return `You played ${hand}. Bot played ${botHand}. You lose! Lmao.`
        case 0:
          return `You both played ${hand}. You tied!`
        case 1:
          return `You played ${hand}. Bot played ${botHand}. You won!`
      }
    },
  },
  methods: {
    playHand(hand) {
      this.hand = hand
      this.botHand = randomIntegerRange(1, 3)

      if (this.hand === this.botHand) {
        this.result = 0
        this.stat.tie++
      } else if (this.hand - (this.botHand % 3) === 1) {
        this.result = 1
        this.stat.win++
      } else {
        this.result = -1
        this.stat.lose++
      }

      this.stat.total_games++
      this.stat.wl_ratio = (this.stat.win + 0.5 * this.stat.tie) / this.stat.total_games
      this.cooldown = 4
      this.elapseCooldown()
    },
    elapseCooldown() {
      const func = () => {
        this.cooldown -= 1 / tickrate
      }
      const interval = 1000 / tickrate

      setTimeout(() => tick(), interval)
      const tick = () => {
        func()

        if (this.cooldown > 0) setTimeout(() => tick(), interval)
      }
    },
  },
}

function translate(hand) {
  switch (hand) {
    case 1:
      return 'Rock'
    case 2:
      return 'Paper'
    case 3:
      return 'Scissors'
  }
}
</script>

<template>
  <div class="hand-buttons">
    <HandButton
      v-for="(type, index) of handType"
      :disabled="onCooldown"
      :hand-type="type"
      @click="playHand(index + 1)"
    />
  </div>

  <HandCooldown :cooldown="cooldown" />

  <div class="result">{{ resultMessage }}</div>

  <ResultStat :stat="stat" />
</template>

<style>
button {
  margin-right: 5px;
}

.win {
  color: hsl(120, 100%, 70%);
}

.tie {
  color: hsl(60, 100%, 70%);
}

.lose {
  color: hsl(0, 100%, 70%);
}

.total-games,
.wl-ratio {
  color: hsl(200, 100%, 50%);
}
</style>
