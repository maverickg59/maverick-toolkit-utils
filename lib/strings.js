export const kebabToCamel = str => {
  const reducer = (acc, value) => acc.concat(value)
  if (typeof str !== 'string') return ''
  const casedArray = str.split('-').map((word, i) => {
    return i === 0 ? word : word.charAt(0).toUpperCase().concat(word.slice(1))
  })
  return casedArray.reduce(reducer)
}
