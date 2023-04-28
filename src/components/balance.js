import React,{useContext} from 'react';
import { Datacontext } from '../context/contextprovider';

export default function Balance (){

    const {state} = useContext(Datacontext);
    let balance = 0;
    if(state.length>=1){state.map((item)=>{balance+=parseInt(item.price)})}
    else balance=0

    console.log(state)
    return (
        <div className='expensepart' style={{alignSelf:'flex-start'}}>
            <label>Balance</label>
            <label>&#8377;{parseInt(balance)}</label>
        </div>
    )
}