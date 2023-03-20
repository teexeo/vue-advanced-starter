export const useExampleStore = defineStore('example', {
  state() {
    return {
      count: 0
    }
  },
  getters: {
    counter_square(state) {
      return state.count * state.count
    }
  },
  actions: {
    increase(num: number = 1) {
      return (this.count += num)
    },
    decrease(num: number = 1) {
      return (this.count -= num)
    }
  }
})
