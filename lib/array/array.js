export const chunkArray = (arrToBeChonked, chonkSize) => {
  let chonks = []
  let chonkCopy = [...arrToBeChonked]
  while (chonkCopy.length > 0) {
    chonks.push(chonkCopy.splice(0, chonkSize))
  }
  return chonks
}
