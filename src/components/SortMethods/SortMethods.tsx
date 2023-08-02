import React, { FC } from 'react';
import "./SortMethodsStyles.scss";
import { Container } from 'react-bootstrap';

export interface ISortMethodsProps {
    array: number[],
    blockHeight: number,
    blockWidth: number
}

const SortMethods: FC<ISortMethodsProps> = (props) => {
    const {
        array,
        blockHeight,
        blockWidth
    } = props;
    
    return (
        <Container className="block-list">
            {array.map((value, index) => {

                return (
                    <div
                        key={index}
                        className="block"
                        style={{
                            height: `${blockHeight * (value / array.length)}px`,
                            width: `${blockWidth}px`
                        }}
                    ></div>
                );
            })}
        </Container>
    );
};

export default SortMethods;
