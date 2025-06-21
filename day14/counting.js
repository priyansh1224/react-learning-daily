import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset } from "./slicer1";

export default function Counting(){
    const count = useSelector((state) => state.slice1.count);
    const dispatch = useDispatch();
      
    return(
        <>
            <h1>counter is {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
    )
}