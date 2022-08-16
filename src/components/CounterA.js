import React from 'react';
import Wrapper from '@/hoc/Wrapper';

function CounterA(props) {
    console.log("CounterA:",props)
    const { CountIncrement, count } = props; //getting those variables we were missing before

    return (
        <button onClick={CountIncrement}>CounterA :{count} </button>
    )
}
export default Wrapper(CounterA);