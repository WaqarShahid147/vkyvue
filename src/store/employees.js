import employeesData from '@/data/employeesData'

const state = {
  all: []
}

const actions = {
  getAllEmployees ({commit}) {
    console.log('1')
    employeesData.getEmployees(employees => {
      commit('recieve_employees', employees)
    })
  }
}

const mutations = {
  recieve_employees (state, employees) {
    console.log('2')
    state.all = employees
  }
}

const getters = {
  allEmployees (state) {
    console.log('3')
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
