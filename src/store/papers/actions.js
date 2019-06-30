import { uid } from 'quasar'

export const addPaper = ({ commit }, paper) => {
  const uniqueId = uid()
  paper.completed = false // 初期値はfalse
  const payload = {
    id: uniqueId,
    paper
  }
  commit('addPaper', payload)
}

export const updatePaper = ({ commit }, payload) => {
  commit('updatePaper', payload)
}

export const deletePaper = ({ commit }, id) => {
  commit('deletePaper', id)
}
