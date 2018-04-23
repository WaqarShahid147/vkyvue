import linksData from '@/data/linksData'

const state = {
  allLinksArray: []
}

const actions = {
  getAllLinks ({commit}) {
    console.log('11')
    linksData.getLinks(links => {
      commit('recieve_links', links)
    })
  }
}

const mutations = {
  recieve_links (state, links) {
    console.log('22')
    state.allLinksArray = links
  }
}

const getters = {
  allLinks (state) {
    console.log('33')
    return state.allLinksArray
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
