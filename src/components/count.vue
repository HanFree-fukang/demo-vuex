<template>
  <div class="count">
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍:{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3>Person组件的总人数为{{personList.length}}</h3>

    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {

name: 'count-container',
data() {
return {
  n: 1
}
},
computed: {
  // sum () {
  //  return this.$store.state.sum
  // },
  // school () {
  //  return this.$store.state.school
  // },
  // subject () {
  //  return this.$store.state.subject
  // },

  //借助mapState生成计算属性,从state中读取数据
  //对象写法：
//  ...mapState({
//     he:'sum',
//     xuexiao:'school',
//     xueke:'subject'
//   }), 

//数组写法：
...mapState('countAbout',['sum','school','subject']),
...mapState('personAbout',['personList']),




// bigSum() {
//   return this.$store.getters.bigSum
// },

// ...mapGetters({bigSum:'bigSum'})
...mapGetters('countAbout',['bigSum'])
}, 
mounted() {
  // const x = mapState({
  //   he:'sum',
  //   xuexiao:'school',
  //   xueke:'subject'
  // })
    console.log(this);
  },
methods : {
    // increment() {
    //   this.$store.commit('JIA',this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN',this.n)
 
    // },+

    // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations（对象写法）
  // ...mapMutations({
  //   JIA: 'JIA',
  //   JIAN: 'JIAN'
  // }),
    // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations（数组写法）
...mapMutations('countAbout',['JIA','JIAN']),

    // incrementOdd() {
    //     this.$store.dispatch('jiaOdd',this.n)
    // },
    // incrementWait() {
    //     this.$store.dispatch('jiaWait',this.n)
    // }

    // 借助mapActions生成对应的方法，方法会调用dispatch去联系Actions（对象写法）
    // ...mapActions({
    //   incrementOdd: 'jiaOdd',
    //   incrementWait:'jiaWait'
    // })

    // 借助mapActions生成对应的方法，方法会调用dispatch去联系Actions（数组写法）
    ...mapActions('countAbout',['jiaOdd','jiaWait'])
  }
}
</script>

<style>

</style>