import Vue from 'vue'

export const addPaper = (state, payload) => {
  Vue.set(state.papers, payload.id, payload.paper)
}

export const updatePaper = (state, payload) => {
  Object.assign(state.papers[payload.id], payload.updates)
}

export const deletePaper = (state, id) => {
  // これだと消えない
  // delete state.papers[id]

  Vue.delete(state.papers, id)
}
