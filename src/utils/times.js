import repeat from './repeat'

const times = n => f =>
  repeat(n)(i => ((f(i), i + 1)))(0)

export default times
