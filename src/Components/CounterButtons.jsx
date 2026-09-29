import {useContext} from 'react'
import CounterContext from './CounterContext'

export default function CounterButtons() {
    const {dispatch} = useContext(CounterContext);
return (
    <div className='buttons'>
        <button onClick={()=> dispatch({type: "increment"})}>
            Increment
        </button>
        <button onClick={()=> dispatch({type: "decrement"})}>
            Decrement
        </button>
        <button onClick={()=> dispatch({type: "reset"})}>
            Reset
        </button>
    </div>
)
}
