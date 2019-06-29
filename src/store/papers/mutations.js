export const updatePaper = (state, payload) => {
  Object.assign(state.papers[payload.id], payload.updates)
}
