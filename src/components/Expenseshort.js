import React,{useContext} from 'react';
import '../App.css'
import { Datacontext } from '../context/contextprovider';


export default function Expense() {

    const {state} = useContext(Datacontext);
    let income=0;
    let expense=0;
    if(state.length>=1){

        state.map((item)=>{
            if(item.price>0){
                income+=parseInt(item.price);
            }
            else{
                expense+=parseInt(item.price);
            }
        })
    }
    else{
        income=0
        expense=0
    }

    return (
        <div className='expense'>
            <div className='expensepart'>
                <label>Income</label>
                <label>&#8377;{income}</label>                
            </div>
            <div style={{borderRight:'0.00001px solid grey'}}></div>
            <div className='expensepart'>
                <label>Expense</label>
                <label>&#8377;{Math.abs(expense)}</label>                
            </div>
        </div>
    )
}