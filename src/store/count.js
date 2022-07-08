// 求和
export default {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      console.log('action中的jiaOdd被调用了', context, value)
      console.log('处理了一些事情')
      context.dispatch('demo1', value)
    },
    demo1(context, value) {
      console.log('处理了很多事情')
      context.dispatch('demo2', value)
    },
    demo2(context, value) {
      console.log('处理了大部分的事情')
      if (context.state.sum % 2) {
        context.commit('JIA', value)
      }
    },
    jiaWait(context, value) {
      console.log('action中的jiaWait被调用了')
      setTimeout(() => {
        context.commit('JIA', value)
      }, 500)
    }
  },
  mutations: {
    JIA(state, value) {
      console.log('mutations中的JIA被调用了')
      state.sum += value
    },
    JIAN(state, value) {
      console.log('mutations中的JIA被调用了')
      state.sum -= value
    }
  },
  state: {
    sum: 0, // 当前的和
    school: '尚硅谷',
    subject: '前端'
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}