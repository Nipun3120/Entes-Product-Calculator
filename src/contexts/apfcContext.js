import { createContext, useContext, useState, useReducer } from "react";
const apcfContext = createContext();

const initialState = [
    {
        type: '',
        quantity: '',
        noOfSteps: '',
        model: '',
    }
]

const apfcReducer =(state, action) => {
    return[...state, action]
}
 
export const ApcfContextProvider = ({children}) => {
    // const [apfcItem, setApfcItem] = useState(initialState);
    const [apfcItem, setApfcItem] = useReducer(apfcReducer, initialState);
    console.log('h1', apfcItem)
    return (
        <apcfContext.Provider value={{apfcItem, setApfcItem}}>
            {children}
        </apcfContext.Provider>
    )
}

export const useApcfContext = ()=> {
    return useContext(apcfContext);
}

