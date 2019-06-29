export const updatePaper = ({ commit }, payload) => {
  commit('updatePaper', payload)
}

export const deletePaper = ({ commit }, id) => {
  commit('deletePaper', id)
}
