import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
    function incrementClick() {
        setCount(count + incrementBy)
    }

    function decrementClick() {
        setCount(count - incrementBy)
    }

    function incrementByClick() {
        setIncrementBy(incrementBy + 1)
    }

    function decrementByClick() {
        setIncrementBy(incrementBy - 1)
    }
    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={incrementClick}>Count+</button>
            <button onClick={decrementClick}>Count-</button>

            <h1>incrementBy value is: {incrementBy}</h1>
            <button onClick={incrementByClick}>incrementBy</button>
            <button onClick={decrementByClick}>decrementBy</button>
        </div>
    )
}