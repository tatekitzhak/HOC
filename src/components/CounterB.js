import React from 'react';
import Wrapper from '@/hoc/Wrapper';

function CounterB(props){
    const { CountIncrement, count } = props;
    return (<button onClick={CountIncrement}>CounterB :{count} </button>)
}

export default Wrapper(CounterB);