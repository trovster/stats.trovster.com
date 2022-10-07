module.exports = {
  number: (number, maximumFractionDigits = 0) => {
    return number ? number.toLocaleString('en-GB', {
      maximumFractionDigits
    }) : 0
  },
  miles: number => {
    return number * 0.000621371192
  },
  hours: number => {
    return number
  },
  minutes: number => {
    return number * 60
  },
}
