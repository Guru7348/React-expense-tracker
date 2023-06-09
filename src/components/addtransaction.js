import React, { useContext, useState } from 'react';
import '../App.css'
import { Datacontext } from '../context/contextprovider'
import useGenerateRandomColor from './useGenerateRandomColor.js'

export default function Add() {

    const {color} = useGenerateRandomColor()
    const [name, setname] = useState('')
    const [amount, setamount] = useState()
    const { state, dispatch } = useContext(Datacontext)
    const idd = state.length>=1 ? state[state.length-1].id+1 : 1
    // console.log(state[state.length-1].id+1)

    const submit = (e) => {
        e.preventDefault()
        
        dispatch({
            type: 'addtransaction', payload: {
                id: idd,
                name: name,
                price: parseInt(amount),
                color:color
            }
        })
        setname('')
        setamount('')
    }

    return (
        <>
            <form onSubmit={submit} style={{ margin: '5px', padding: '5px',width:'100%'}}>
                <label style={{ fontSize: 'x-large' }}>Add new Transaction</label>
                <hr />
                <label style={{ fontSize: 'medium' }} >Label</label>
                <input required type='text' name='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                <label style={{ fontSize: 'medium' }}>Amount(expenses(-ve),income(+ve))</label>
                <input required type='text' name='price' value={amount} onChange={(e) => { setamount(e.target.value) }} />
                <input type='submit' value='add Transaction' id='submit' />
            </form>
        </>
    )
}