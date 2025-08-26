//deprecated. ill try to figure out how to make the condition change retroactively, perhaps something to do with vue, but this makes no sense unfortunately

/**
 * Performs a function based on the condition. It is restructured from setInterval, * * but based on 'when' the function is first called.
 * @param {expression} condition - If the condition becomes 'falsy', the function is then no longer called.
 * @param {number} interval - Every (milliseconds) this function would be 'performed'.
 * @param {Function} func - The function to be called.
 */
window.conditionalInterval = function (condition, interval = 1000, func) {
  if (typeof func !== 'function') throw new Error('Passed argument is not a function.')

  let expectedNextTick = Date.now() + interval

  setTimeout(() => tick(func), interval)

  ////tick(func) = () => {
  function tick(func) {
    let drift = Date.now() - expectedNextTick
    if (drift > interval) throw new Error("I stole this code I don't know what happened either")

    func()

    expectedNextTick += interval

    if (condition) setTimeout(() => tick(func), interval - drift)
  }
}
