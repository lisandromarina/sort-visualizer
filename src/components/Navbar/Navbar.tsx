import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./NavbarStyles.scss"
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Slider } from 'primereact/slider';


export interface INavbarProps {
    generateNewArray: () => void,
    handleSort: () => void,
    setMethodSelected: Dispatch<SetStateAction<string>>,
    methodSelected: string,
    handleOnSlice: (number: any) => void,
    arrayLength: number;
    setAnimationSpeed: Dispatch<SetStateAction<any>>,
    animationSpeed:number
}

const NavbarComponent: FC<INavbarProps> = (props) => {
    const {
        generateNewArray,
        handleSort,
        setMethodSelected,
        methodSelected,
        arrayLength,
        handleOnSlice,
        setAnimationSpeed,
        animationSpeed
    } = props;

    function mapRange(value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number {
        return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
      }

    return (
        <Navbar className='navbar-container'>
            <Navbar.Text
                onClick={generateNewArray}>
                Create new array
            </Navbar.Text>
            <Navbar.Brand>
                <p>Change array size</p>
                <Slider
                    value={arrayLength}
                    min={5}
                    max={500}
                    onChange={(e) => handleOnSlice(e.value)}
                />
            </Navbar.Brand>
            <Navbar.Brand>
                <p>Change Speed</p>
                <Slider
                    value={animationSpeed}
                    min={1}
                    max={100}
                    onChange={(e) => setAnimationSpeed(e.value)}
                />
            </Navbar.Brand>
            <Navbar.Text
                className={methodSelected === 'mergeSort' ? ' active' : ''}
                onClick={() => setMethodSelected("mergeSort")}>
                Merge Sort
            </Navbar.Text>
            <Navbar.Text
                className={methodSelected === 'quickSort' ? ' active' : ''}
                onClick={() => setMethodSelected("quickSort")}>
                Quick Sort
            </Navbar.Text>
            <Navbar.Text
                className={methodSelected === 'bubbleSort' ? ' active' : ''}
                onClick={() => setMethodSelected("bubbleSort")}>
                Bubble Sort
            </Navbar.Text>
            <Navbar.Text
                className={methodSelected === 'insertionSort' ? ' active' : ''}
                onClick={() => setMethodSelected("insertionSort")}>
                Insertion Sort
            </Navbar.Text>
            <Navbar.Text onClick={handleSort}>Start!</Navbar.Text>
        </Navbar>
    );
}


export default NavbarComponent;
