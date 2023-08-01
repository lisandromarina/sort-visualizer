# Sorting Algorithms

This repository contains JavaScript implementations and explanations of four popular sorting algorithms: Merge Sort, Quick Sort, Bubble Sort, and Insertion Sort.

## Table of Contents
- [Merge Sort](#merge-sort)
- [Quick Sort](#quick-sort)
- [Bubble Sort](#bubble-sort)
- [Insertion Sort](#insertion-sort)

## Merge Sort

Merge Sort is a divide-and-conquer algorithm that works by repeatedly dividing the input array into two halves, sorting each half recursively, and then merging the two sorted halves back together to produce the final sorted array.

### How it works
1. Divide the unsorted array into two halves.
2. Sort each half recursively using Merge Sort.
3. Merge the two sorted halves to produce the final sorted array.

### Time Complexity
- Average: O(n log n)
- Worst: O(n log n)

## Quick Sort

Quick Sort is an efficient divide-and-conquer sorting algorithm. It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted using Quick Sort.

### How it works
1. Choose a pivot element from the array.
2. Partition the array into two sub-arrays, with elements less than the pivot on one side and elements greater than the pivot on the other side.
3. Recursively sort the two sub-arrays.

### Time Complexity
- Average: O(n log n)
- Worst: O(n^2)

## Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

### How it works
1. Compare each pair of adjacent elements in the list.
2. If the elements are in the wrong order, swap them.
3. Repeat the process until the entire list is sorted.

### Time Complexity
- Average: O(n^2)
- Worst: O(n^2)

## Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It works by taking one element at a time from the input array and inserting it into the correct position in the sorted portion of the array.

### How it works
1. Start with the first element as the sorted portion.
2. Take the next element and insert it into the correct position in the sorted portion.
3. Repeat the process for all remaining elements.

### Time Complexity
- Average: O(n^2)
- Worst: O(n^2)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
