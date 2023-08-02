export function getMergeSortAnimations(array: number[]): number[][] {
  const animations: number[][] = [];
  if (array.length <= 1) return [array];
  const helperArray: number[] = array.slice();
  mergeSortHelper(array, 0, array.length - 1, helperArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  helperArray: number[],
  animations: number[][]
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(helperArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(helperArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, helperArray, animations);
}

function doMerge(
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  helperArray: number[],
  animations: number[][]
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (helperArray[i] <= helperArray[j]) {
      animations.push([k, helperArray[i]]);
      mainArray[k++] = helperArray[i++];
    } else {
      animations.push([k, helperArray[j]]);
      mainArray[k++] = helperArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, helperArray[i]]);
    mainArray[k++] = helperArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, helperArray[j]]);
    mainArray[k++] = helperArray[j++];
  }
}