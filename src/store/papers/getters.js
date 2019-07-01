export const allPapersToDo = (state, getters) => {
  const papersFiltered = getters.papersFiltered
  let getPapers = {}
  Object.keys(papersFiltered).forEach((key) => {
    let paper = papersFiltered[key]
    if (!paper.completed) {
      getPapers[key] = paper
    }
  })
  return getPapers
}

export const allPapersCompleted = (state, getters) => {
  const papersFiltered = getters.papersFiltered
  let getPapers = {}
  Object.keys(papersFiltered).forEach((key) => {
    let paper = papersFiltered[key]
    if (paper.completed) {
      getPapers[key] = paper
    }
  })
  return getPapers
}

export const papersFiltered = (state) => {
  const papersFiltered = {}
  if (state.search) {
    Object.keys(state.papers).forEach((key) => {
      const paper = state.papers[key],
        searchLowerCase = state.search.toLowerCase()
      if (paper.subjectSymbol.toLowerCase().includes(searchLowerCase) ||
          paper.subjectNumber.toLowerCase().includes(searchLowerCase) ||
          paper.subjectTheme.toLowerCase().includes(searchLowerCase) ||
          paper.subjectTeacher.toLowerCase().includes(searchLowerCase) ||
          paper.homeroomTeacher.toLowerCase().includes(searchLowerCase) ||
          paper.memo.toLowerCase().includes(searchLowerCase)) {
        papersFiltered[key] = paper
      }
    })
    return papersFiltered
  }
  return state.papers
}
