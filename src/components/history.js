import React,{useContext} from 'react';
import Historyitem from './historyitem'
import {Datacontext} from '../context/contextprovider'


export default function History () {

    const {state} = useContext(Datacontext)
    return (
        <>
            <label style={{alignSelf:'flex-start'}}>History</label>
            <hr/>
           {
                state.length>=1?state.map((item)=>{return <Historyitem item={item} />}):<label style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>No Transactions</label>
           }
        </>
    )
}