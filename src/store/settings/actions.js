import { LocalStorage } from 'quasar'

export const setShowPapersInOneList = ({ commit, dispatch }, value) => {
  commit('setShowPapersInOneList', value)
  dispatch('saveSettings')
}

export const saveSettings = ({ state }) => {
  LocalStorage.set('settings', state.settings)
}

export const getSettings = ({ commit }) => {
  const settings = LocalStorage.getItem('settings')
  if (settings) {
    commit('setSettings', settings)
  }
}
