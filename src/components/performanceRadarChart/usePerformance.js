export const perfMapped = (user) => {
  return user.data.map(perf => {
    return {kind: numberToKind(perf, user), value: perf.value}
  })
}
/**
 * Function which transforms numbers to kind
 * @param {Number} kind value of performance
 * @returns {String} number translated to performance type
 */
const numberToKind = ({ kind }, user) => {
  let value = ''
  switch (kind) {
    case 1:
      value = user.kind[1]
      break
    case 2:
      value = user.kind[2]
      break
    case 3:
      value = user.kind[3]
      break
    case 4:
      value = user.kind[4]
      break
    case 5:
      value = user.kind[5]
      break
    case 6:
      value = user.kind[6]
      break
    default:
      value = ''
  }
  return value
}