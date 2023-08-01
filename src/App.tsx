import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import SortMethods from './components/SortMethods';
import { getMergeSortAnimations } from "./utils/mergeSort";
import { getBubbleSortAnimations } from "./utils/bubbleSort";
import { getQuickSortAnimations } from "./utils/quickSort";
import { getInsertionSortAnimations } from "./utils/insertionSort";

function App() {
  // States
  const [array, setArray] = useState<number[]>([]);
  const [methodSelected, setMethodSelected] = useState<string>("mergeSort");
  const [animationSpeed, setAnimationSpeed] = useState<number>(1);
  const [arrayLength, setArrayLength] = useState<number>(250);
  const [blockWidth, setBlockWidth] = useState<number>(1);

  // Constants for array generation
  const MIN_ARRAY_LENGTH: number = 0;
  const MAX_ARRAY_LENGTH: number = 500;
  const MAX_SPEED: number = 100;

  // Colors for animations
  const primaryColor = "lightblue";
  const secondaryColor = "red";

  // Function to generate a new array with unique numbers
  function generateNewArray(): void {
    const MAXWIDTH = 1000
    const widhtQuantity = MAXWIDTH - arrayLength;
    setBlockWidth(widhtQuantity * 2 / arrayLength)

    const numbersSet: Set<number> = new Set();
    const numbersArray: number[] = [];

    while (numbersArray.length < arrayLength) {
      const randomNumber: number = Math.floor(Math.random() * (arrayLength - MIN_ARRAY_LENGTH + 1)) + MIN_ARRAY_LENGTH;

      if (!numbersSet.has(randomNumber)) {
        numbersSet.add(randomNumber);
        numbersArray.push(randomNumber);
      }
    }

    setArray(numbersArray);
  }

  function handleOnSlice(number: number) {
    const MAXWIDTH = 1000
    const widthQuantity = MAXWIDTH - number;
    setBlockWidth(widthQuantity * 2 / number);
    setArrayLength(number);
  }

  // Function to handle sorting based on selected method
  function handleSort(): void {
    switch (methodSelected) {
      case 'mergeSort':
        mergeSort();
        break;
      case 'quickSort':
        quickSort();
        break;
      case 'bubbleSort':
        bubbleSort();
        break;
      case "insertionSort":
        insertionSort();
        break;
    }
  }

  function mergeSort() {
    // Get merge sort animations
    const animations = getMergeSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
      // Get all block elements
      const arrayBars = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;

      // Check if it's a color change animation
      const ifColorChange = i % 3 !== 2;

      if (ifColorChange) {
        // Color change animation
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? secondaryColor : primaryColor;

        // Delayed color change
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (MAX_SPEED - animationSpeed));
      } else {
        // Height change animation
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;

          // Delayed height change
          barOneStyle.height = `${MAX_ARRAY_LENGTH * (newHeight / array.length)}px`;
        }, i * (MAX_SPEED - animationSpeed));
      }
    }
  }

  function insertionSort() {
    // Handles displaying insertion sort animations
    const animations = getInsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? secondaryColor
            : primaryColor;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (MAX_SPEED - animationSpeed));
      } else {
        const [, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${MAX_ARRAY_LENGTH * (newHeight / array.length)}px`;
        }, i * (MAX_SPEED - animationSpeed));
      }
    }
  }

  function quickSort() {
    // Handles displaying quick sort animations
    const animations = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? secondaryColor
            : primaryColor;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * MAX_SPEED - animationSpeed);
      } else {
        const [, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${MAX_ARRAY_LENGTH * (newHeight / array.length)}px`;
        }, i * (MAX_SPEED - animationSpeed));
      }
    }
  }

  function bubbleSort() {
    // Handles displaying bubble sort animations
    const animations = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] === "comparison1" || animations[i][0] === "comparison2";

      const arrayBars = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;
      if (isColorChange) {
        const color = animations[i][0] === "comparison1" ? secondaryColor : primaryColor;

        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (MAX_SPEED - animationSpeed));
      } else {
        const [, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${MAX_ARRAY_LENGTH * (newHeight / array.length)}px`;
        }, i * (MAX_SPEED - animationSpeed));
      }
    }
  }

  useEffect(() => {
    generateNewArray()
  }, [arrayLength])

  return (
    <Container>
      <Navbar
        handleSort={handleSort}
        generateNewArray={generateNewArray}
        setMethodSelected={setMethodSelected}
        methodSelected={methodSelected}
        arrayLength={arrayLength}
        handleOnSlice={handleOnSlice}
        animationSpeed={animationSpeed}
        setAnimationSpeed={setAnimationSpeed}
      />
      <SortMethods
        array={array}
        blockHeight={MAX_ARRAY_LENGTH}
        blockWidth={blockWidth}
      />
    </Container>
  );
}

export default App;