function calculateLeftoverBlocks(numBlocks) {
  let layer = 1;

  while (numBlocks >= layer * layer) {
    numBlocks -= layer * layer;
    layer += 1;
  }

  return numBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true