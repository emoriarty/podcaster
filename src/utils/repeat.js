const repeat = n => f => x => {
  if (n > 0) {
    return repeat(n - 1)(f)(f(x))
  } else {
    return x
  }
}

export default repeat
