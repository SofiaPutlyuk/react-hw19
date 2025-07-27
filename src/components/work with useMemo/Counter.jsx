import { useMemo, useState } from "react"
function slowDouble(num) {
    for (let i = 0; i < 100000000; i++) { }
    return num * 2;
}
export const Counter = () => {
    const [count, setCount] = useState(0)
    const doubled = useMemo(() => slowDouble(count), [count])
    return (
        <div>
            <p>Значення: {count}</p>
            <p>Подвоєне: {doubled}</p>
            <button onClick={() => setCount(count + 1)}>Збільшити</button>
        </div>
    )
}