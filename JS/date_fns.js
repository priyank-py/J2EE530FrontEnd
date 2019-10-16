const now = new Date()
const before = new Date(123123342342)
console.log(dateFns.isToday(now))

console.log(dateFns.distanceInWords(before, now, {addSuffix:true}))
