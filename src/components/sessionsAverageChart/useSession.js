const numberToDay = ({ day }) => {
let value = ''
switch (day) {
    case 1:
    value = 'L'
    break
    case 2:
    value = 'M'
    break
    case 3:
    value = 'M'
    break
    case 4:
    value = 'J'
    break
    case 5:
    value = 'V'
    break
    case 6:
    value = 'S'
    break
    case 7:
    value = 'D'
    break
    default:
    value = ''
}
return value
}

export const sessionsMapped = (user) => {
  return user.sessions.map(session => {
    return {sessionLength: session.sessionLength, day: numberToDay(session)}
  })
}