import {useContext} from 'react'
import CounterContext from './CounterContext'

export default function Counterr() {
    const {count} = useContext(CounterContext);
return (
    <div className='counter'>
        <h1>Counter</h1>
        <h2>{count}</h2>
    </div>
)
}
