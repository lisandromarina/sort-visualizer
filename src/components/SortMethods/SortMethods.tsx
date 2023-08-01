import React, { FC } from 'react';
import "./SortMethodsStyles.scss";

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
        <div className="block-list">
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
        </div>
    );
};

export default SortMethods;
