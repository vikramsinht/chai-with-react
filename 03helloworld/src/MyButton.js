import { useState } from "react";

function MyButton() {
    const [count, setcount] = useState(0);

    function increment() {
        if (count < 20) {
            setcount(count + 1)
        }
    }

    function decrement() {
        if (count > 0) {
            setcount(count - 1)
        }
    }

    return (
        <>
            <h2>Count : {count}</h2>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </>
    )
}

export default MyButton;
