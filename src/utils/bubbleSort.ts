export function getBubbleSortAnimations(array: number[]): any[] {
  const animations: any[] = [];
  let helperArray = array.slice();
  bubbleSort(helperArray, animations);
  return animations;
}

function bubbleSort(helperArray: number[], animations: any[]) {
  const length = helperArray.length;
  let x = length - 1;
  while (x > 0) {
    let swapped = false;
    for (let i = 0; i < x; ++i) {
      animations.push(["comparison1", i, i + 1]);
      animations.push(["comparison2", i, i + 1]);
      if (helperArray[i] > helperArray[i + 1]) {
        swapped = true;
        animations.push(["swap", i, helperArray[i + 1]]);
        animations.push(["swap", i + 1, helperArray[i]]);
        swap(helperArray, i, i + 1);
      }
    }
    if (!swapped) break;
    x--;
  }
}

function swap(helperArray: number[], firstIndex: number, secondIndex: number) {
  let temp = helperArray[firstIndex];
  helperArray[firstIndex] = helperArray[secondIndex];
  helperArray[secondIndex] = temp;
}