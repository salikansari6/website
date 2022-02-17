export const isEven = (n: number) => {
  if ((n ^ 1) === n + 1 || n === 0) {
    return true
  } else {
    return false
  }
}

export const calculateStepPosition = (length: number) => {
  switch (length) {
    case 1:
      return [100]
    case 2:
      return [20, 100]
    case 3:
      return [20, 60, 100]
    case 4:
      return [20, 40, 60, 100]
    case 5:
      return [20, 40, 60, 80, 100]
  }
}
