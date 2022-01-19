export const isEven = (n: number) => {
  if ((n ^ 1) === n + 1 || n === 0) {
    return true
  } else {
    return false
  }
}
