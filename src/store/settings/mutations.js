export const setShowPapersInOneList = (state, value) => {
  state.settings.showPapersInOneList = value
}

export const setSettings = (state, settings) => {
  Object.assign(state.settings, settings)
}
