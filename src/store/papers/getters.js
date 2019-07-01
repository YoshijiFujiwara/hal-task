export const allPapersToDo = (state) => {
  let getPapers = {}
  Object.keys(state.papers).forEach((key) => {
    let paper = state.papers[key]
    if (!paper.completed) {
      getPapers[key] = paper
    }
  })
  return getPapers
}

export const allPapersCompleted = (state) => {
  let getPapers = {}
  Object.keys(state.papers).forEach((key) => {
    let paper = state.papers[key]
    if (paper.completed) {
      getPapers[key] = paper
    }
  })
  return getPapers
}
