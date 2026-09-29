import { useReducer } from "react";
import CounterContext from "./CounterContext";
const initialstate = 0;
function reducer(state,action){
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state;
}
}
export default function CounterProvider({children}) {
    const [count, dispatch] = useReducer(reducer, initialstate);
return (
    <CounterContext.Provider value={{count,dispatch}}>
        {children}
    </CounterContext.Provider>
);
}

