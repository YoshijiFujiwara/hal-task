export const selectAll = {
  inserted (el) {
    // q-inputを使用している場合
    if (el.tagName === 'DIV') {
      const input = el.querySelector('.q-field__native')
      input.addEventListener('focus', () => {
        input.select()
      })
    } else if (el.tagName === 'INPUT') { // inputを使用している場合
      el.addEventListener('focus', () => {
        if (el.value.length) {
          el.select()
        }
      })
    }
  }
}
