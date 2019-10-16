const before = new Date('September 25 2019');

const now = new Date();


const diff = now.getTime() - before.getTime();

const s = diff/1000;
const m = s/60;
const h = m/60;
const d = Math.round(h/24);

const dt = new Date()
console.log(dt)


