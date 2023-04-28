import {createContext,useReducer} from "react";
import reducer from "./reducer";

export const Datacontext = createContext(null)
export default function Data({children}){

    const datalist = []

    const [state,dispatch] = useReducer(reducer,datalist)


    return (
        <Datacontext.Provider value = {{state:state,dispatch:dispatch}}>{children}</Datacontext.Provider>
    )
}
