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
  },
  getLinksRead ({commit}, profileId, linkId) {
    console.log('Inside action ' + profileId)
    console.log('Inside action ' + linkId)
    commit('links_read', profileId, linkId)
  }
}

const mutations = {
  recieve_employees (state, employees) {
    console.log('2')
    state.all = employees
  },
  links_read (state, profileId, linkId) {
    console.log('Inside mutator profile ' + profileId)
    console.log('Inside mutator ' + linkId)
    let a = state.all.find(p => p.id === profileId)
    let b = (a.link_is_read)[0].isRead
    console.log(b)
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
