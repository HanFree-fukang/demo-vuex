import axios from 'axios'
import { nanoid } from 'nanoid'
// 人员管理相关配置
export default {
  namespaced: true,

  actions: {
    addPerson(context,value) {
      if (value.name) {
        context.commit('ADD_PERSON',value)
      } else {
        alert('输入不能为空')
        
      }
    },
    addPersonWang(context, value) {
      if (value.name) {
        context.dispatch('commitaddPersonWang',value)
      } else {
        alert('输入不能为空')
      }
    },
    commitaddPersonWang(context,value) {
      if (value.name.indexOf('王') !== -1) {
        context.commit('ADD_PERSON',value)
      } else {
        alert('必须输入姓王的人')
      }
    },
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          console.log(response);
          context.commit('ADD_PERSON',{id:nanoid(), name:response.data})
        }
        
      )
      .catch(error => {
        console.log(error.message);
      })
    }
  },
  mutations: {
    ADD_PERSON(state, personListObj) {
      state.personList.unshift(personListObj)
    }
  },
  state: {
    personList: [{ id: '001', name: '张三' }]
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name
    }
  }
}