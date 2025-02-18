import { useState } from 'react'
function useCount() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return {
        count,
        increment,
        decrement
    }
}

export default useCount;