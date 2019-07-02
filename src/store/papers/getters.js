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

export const papersFiltered = (state, getters) => {
  const papersSorted = getters.papersSorted
  const papersFiltered = {}
  if (state.search) {
    Object.keys(papersSorted).forEach((key) => {
      const paper = papersSorted[key],
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

// 現状科目名順に並べている
export const papersSorted = (state) => {
  const papersSorted = {},
    keysOrdered = Object.keys(state.papers)
  keysOrdered.sort((a, b) => {
    let paperAProp = state.papers[a][state.sort].toLowerCase(),
      paperBProp = state.papers[b][state.sort].toLowerCase()

    // 日付の場合だけ、別
    // todo バグ発生中！！
    if (state.sort === 'deliveryDate') {
      paperAProp = Date.parse(paperAProp.replace(/\//g, '-'))
      paperBProp = Date.parse(paperBProp.replace(/\//g, '-'))
    }

    if (paperAProp > paperBProp) return 1
    else if (paperAProp < paperBProp) return -1
    else return 0
  })

  keysOrdered.forEach(key => {
    papersSorted[key] = state.papers[key]
  })

  return papersSorted
}
//
// const processTime = (dateString) => {
//   const parts = dateString.split('/')
//   // console.log(parts)
//   // console.log(Number(new Date(parts[0], parseInt(parts[1]) - 1, parts[2])))
//   return Number(new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])))
// }
