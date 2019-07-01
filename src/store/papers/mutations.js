import Vue from 'vue'

export const addPaper = (state, payload) => {
  Vue.set(state.papers, payload.id, payload.paper)
}

export const updatePaper = (state, payload) => {
  Object.assign(state.papers[payload.id], payload.updates)
}

export const deletePaper = (state, id) => {
  Vue.delete(state.papers, id)
}

export const setSearch = (state, value) => {
  state.search = value
}
