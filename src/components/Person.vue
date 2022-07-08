<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的求和为{{sum}}</h3>
    <h3>列表中第一个人的名字是： {{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add()">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>  
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: 'PersonContainer',
  data() {
    return {
    name: '',
    
    }
  },

mounted() {
console.log(this.$store);
},
  computed : {
    // personList() {
    //   return this.$store.state.personList
    // }
    ...mapState('countAbout',['sum']),
    ...mapState('personAbout',['personList']),
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    },

    personListObj() {
      return {id: nanoid(),name : this.name}
    }
  },
  methods: {
    add() {
      this.$store.dispatch('personAbout/addPerson',this.personListObj)
      this.name = ""
    },
    addWang() {
      this.$store.dispatch('personAbout/addPersonWang',this.personListObj)
      this.name = ""

    },
    addPersonServer() {
     this.$store.dispatch('personAbout/addPersonServer') 
    }
  }
}
</script>

<style>

</style>