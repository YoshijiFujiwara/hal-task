import Vue from 'vue'

export const addPaper = (state, payload) => {
  Vue.set(state.papers, payload.id, payload.paper)
  // state.papers[payload.id] = payload.paper
  // Object.assign({}, state.papers)
}

export const updatePaper = (state, payload) => {
  console.log(payload.updates)
  // state.papers[payload.id].completed = payload.updates.completed
  Object.assign(state.papers[payload.id], payload.updates)
  // Vue.set(state.papers, payload.id, state.papers[payload.id])

  console.log(JSON.stringify(state.papers))
}

export const deletePaper = (state, id) => {
  // これだと消えない
  // delete state.papers[id]

  Vue.delete(state.papers, id)
}
