import {createContext,useReducer} from "react";
import reducer from "./reducer";

export const Datacontext = createContext(null)
export default function Data({children}){

    const datalist = [
        {
            id:0,
            name:'recharge',
            price:-200
        },
        {
            id:1,
            name:'refund',
            price:+5000
        },
        {
            id:2,
            name:'earphone',
            price:-2500
        }
    ]

    const [state,dispatch] = useReducer(reducer,datalist)


    return (
        <Datacontext.Provider value = {{state:state,dispatch:dispatch}}>{children}</Datacontext.Provider>
    )
}
