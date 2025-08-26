<script>
export default {
  props: {
    stat: Object,
  },
  computed: {
    wl_ratioPercent() {
      return `${this.stat.wl_ratio * 100}%`
    },
  },
}
</script>

<template>
  <div class="stat">
    <div>
      Wins:
      <span class="win">
        {{ stat.win }}
      </span>
      | Ties:
      <span class="tie">
        {{ stat.tie }}
      </span>
      | Losses:
      <span class="lose">
        {{ stat.lose }}
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
