import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter((prevState) => prevState + 1);
    };

    const decrement = () => {
        setCounter((prevState) => prevState - 1);
    };

    return [counter, increment, decrement];
};
