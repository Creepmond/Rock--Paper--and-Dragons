<script>

import { randomIntegerRange } from '@/core/random.js';

export default {
  data() { return {
    hand: 0,
    botHand: 0,
    result: 0,
    stat: {
      win: 0,
      lose: 0,
      tie: 0,
      total_games: 0,
      wl_ratio: 0.5
    }
  }},
  computed: {
    resultMessage() {
      const hand = translate(this.hand);
      const botHand = translate(this.botHand);

      if (this.stat.total_games === 0)
        return 'Nothing has happened yet.';

      switch (this.result) {
        case -1: return `You played ${hand}. Bot played ${botHand}. You lose! Lmao.`;
        case 0: return `You both played ${hand}. You tied!`;
        case 1: return `You played ${hand}. Bot played ${botHand}. You won!`;
      }
    },
    wl_ratioPercent() {
      return `${this.stat.wl_ratio * 100}%`;
    }
  },
  methods: {
    playHand(hand) {
      this.hand = hand;
      this.botHand = randomIntegerRange(1, 3);

      if (this.hand === this.botHand) {
        this.result = 0;
        this.stat.tie++;
      } else
      if (this.hand - (this.botHand % 3) === 1) {
        this.result = 1;
        this.stat.win++;
      }
      else {
        this.result = -1;
        this.stat.lose++;
      }

      this.stat.total_games++;
      this.stat.wl_ratio = ( this.stat.win + ( 0.5*this.stat.tie )) / this.stat.total_games;
    },
  }
}

function translate(hand) {
  switch (hand) {
    case 1: return 'Rock';
    case 2: return 'Paper';
    case 3: return 'Scissors';
  }
}

</script>



<template>
  <button @click="playHand(1)">Rock</button>
  <button @mousedown="playHand(2)">Paper</button>
  <button @mousedown="playHand(3)">Scissors</button>

  <div class="result">{{ resultMessage }}</div>

  <div class="stat">
    <div>
      Wins:
      <span class="win">
        {{ stat.win }}
      </span>
      |
      Losses:
      <span class="lose">
        {{ stat.lose }}
      </span>
      |
      Ties:
      <span class="tie">
        {{ stat.tie }}
      </span> 
    </div>
    <div>
      Total Games:
      <span class="total-games">
        {{ stat.total_games }}
      </span>
    </div>
    <div>
      W/L Ratio:
      <span class="wl-ratio">
        {{ wl_ratioPercent }}
      </span> 
    </div>
  </div>
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

.total-games, .wl-ratio {
  color: hsl(200, 100%, 50%);
}

</style>