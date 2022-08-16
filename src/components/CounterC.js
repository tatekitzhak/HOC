import React from 'react';
import Wrapper from '@/hoc/Wrapper';


function CounterC(props) {
    const { CountIncrement, count } = props;

    return (
        <button onClick={CountIncrement}>
            CounterA :{count}
        </button>);

}
export default Wrapper(CounterC);