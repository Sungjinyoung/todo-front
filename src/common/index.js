export const autoHypenPhone = (phoneNumber) => {
  phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
  let tmp = ''
  if (phoneNumber.length < 4) {
    return phoneNumber
  } else if (phoneNumber.length < 7) {
    if (phoneNumber.substr(0, 2) == '02') {
      tmp += phoneNumber.substr(0, 2)
      tmp += '-'
      tmp += phoneNumber.substr(2)
    } else {
      tmp += phoneNumber.substr(0, 3)
      tmp += '-'
      tmp += phoneNumber.substr(3)
    }
    return tmp
  } else if (phoneNumber.length < 11) {
    if (phoneNumber.substr(0, 2) == '02') {
      tmp += phoneNumber.substr(0, 2)
      tmp += '-'
      if (phoneNumber.length < 10) {
        tmp += phoneNumber.substr(2, 3)
        tmp += '-'
        tmp += phoneNumber.substr(5)
      } else {
        tmp += phoneNumber.substr(2, 4)
        tmp += '-'
        tmp += phoneNumber.substr(6)
      }
    } else if (phoneNumber.substr(0, 4) == '1544') {
      if (phoneNumber.length < 9) {
        tmp += phoneNumber.substr(0, 4)
        tmp += '-'
        tmp += phoneNumber.substr(4)
      } else {
        return phoneNumber
      }
    } else {
      tmp += phoneNumber.substr(0, 3)
      tmp += '-'
      tmp += phoneNumber.substr(3, 3)
      tmp += '-'
      tmp += phoneNumber.substr(6)
    }
    return tmp
  } else if (phoneNumber.length < 12) {
    if (phoneNumber.substr(0, 2) == '02') {
      return phoneNumber
    }
    tmp += phoneNumber.substr(0, 3)
    tmp += '-'
    tmp += phoneNumber.substr(3, 4)
    tmp += '-'
    tmp += phoneNumber.substr(7)

    return tmp
  }
  return phoneNumber
}
