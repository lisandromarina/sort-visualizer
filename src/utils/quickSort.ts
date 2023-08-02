// Utility function to get a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getQuickSortAnimations(array: number[]): any[] {
  const animations: any[] = [];
  const helperArray = array.slice();
  doQuickSort(helperArray, 0, helperArray.length - 1, animations);
  array = helperArray;
  return animations;
}

function doQuickSort(
  helperArray: number[],
  startIdx: number,
  endIdx: number,
  animations: any[]
) {
  let pivotIdx: number;
  if (startIdx === endIdx) return;
  if (startIdx < endIdx) {
    pivotIdx = partitionArray(helperArray, startIdx, endIdx, animations);
    doQuickSort(helperArray, startIdx, pivotIdx - 1, animations);
    doQuickSort(helperArray, pivotIdx + 1, endIdx, animations);
  }
}

function partitionArray(
  helperArray: number[],
  startIdx: number,
  endIdx: number,
  animations: any[]
): number {
  const pivotIdx = getRandomNumber(startIdx, endIdx); // get a random index in the array for the pivot

  animations.push(["comparison1", pivotIdx, endIdx]);
  animations.push(["swap", pivotIdx, helperArray[endIdx]]);
  animations.push(["swap", endIdx, helperArray[pivotIdx]]);
  animations.push(["comparison2", pivotIdx, endIdx]);
  swapEleInArray(helperArray, pivotIdx, endIdx);

  let lti = startIdx;

  for (let i = startIdx; i < endIdx; ++i) {
    animations.push(["comparison1", i, endIdx]);
    animations.push(["comparison2", i, endIdx]);
    if (helperArray[i] <= helperArray[endIdx]) {
      animations.push(["comparison1", i, lti]);
      animations.push(["swap", i, helperArray[lti]]);
      animations.push(["swap", lti, helperArray[i]]);
      animations.push(["comparison2", i, lti]);
      swapEleInArray(helperArray, i, lti);
      lti++;
    }
  }
  animations.push(["comparison1", lti, endIdx]);
  animations.push(["swap", endIdx, helperArray[lti]]);
  animations.push(["swap", lti, helperArray[endIdx]]);
  animations.push(["comparison2", lti, endIdx]);

  swapEleInArray(helperArray, lti, endIdx);
  return lti;
}

function swapEleInArray(helperArray: number[], firstIdx: number, secondIdx: number) {
  const temp = helperArray[firstIdx];
  helperArray[firstIdx] = helperArray[secondIdx];
  helperArray[secondIdx] = temp;
}