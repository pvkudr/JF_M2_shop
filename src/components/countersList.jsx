import React, { useState }  from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialSate = [
        {id: 0, value: 0, name: 'Useless thing'},
        {id: 1, value: 0, name: 'Spoon'},
        {id: 2, value: 0, name: 'Fork'},
        {id: 3, value: 0, name: 'Plate'},
        {id: 4, value: 0, name: 'Minimalist kit'},
    ];
    const testSate = [
        {id: 0, value: 1, name: 'Useless thing'},
        {id: 1, value: 2, name: 'Spoon'},
        {id: 2, value: 3, name: 'Fork'},
        {id: 3, value: 4, name: 'Plate'},
        {id: 4, value: 5, name: 'Minimalist kit'},
    ]

    const [counters, setCounters] = useState(initialSate)

    const handleDelete = (id) =>{
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }

    const handleIncrement = (id) =>{
        const newCounters = [...counters]
        newCounters.forEach((counter) =>{
            if (counter.id === id) {
                counter.value +=1
                setCounters(newCounters)
            }
        })
    }
    const handleDecrement = (id) =>{
        console.log('clicked -', id)
        const newCounters = [...counters]
        newCounters.forEach((counter) =>{
            if (counter.id === id && counter.value > 0) {
                counter.value -=1
                setCounters(newCounters)
            }
        })
    }

    const handleReset = () => {
        setCounters(initialSate)
    }

    return (
    <>
        {counters.map( (count) => (
            <Counter
                key = {count.id}
                {...count}
                onDelete = {handleDelete}
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}
            />
            ))}
        <button
            className="btn btn-danger btn-sm m-2"
            onClick = {handleReset}
        >
            Reset
        </button>
    </>
    )
}

export default CountersList