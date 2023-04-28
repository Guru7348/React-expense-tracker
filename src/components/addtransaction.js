import React, { useContext, useState } from 'react';
import '../App.css'
import { Datacontext } from '../context/contextprovider'

export default function Add() {

    const [name, setname] = useState('')
    const [amount, setamount] = useState()
    const { state, dispatch } = useContext(Datacontext)
    const [id,setid] = useState(state.length)
    console.log(state[state.length-1].id+1)

    const submit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'addtransaction', payload: {
                id: state[state.length-1].id+1,
                name: name,
                price: parseInt(amount)
            }
        })
        setname('')
        setamount('')
    }

    return (
        <>
            <form onSubmit={submit} style={{ margin: '5px', padding: '5px' }}>
                <label style={{ fontSize: 'xx-large' }}>Add new Transaction</label>
                <hr />
                <label style={{ fontSize: 'medium' }} >Label</label>
                <input type='text' name='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                <label style={{ fontSize: 'medium' }}>Amount(negative-expense,positive-income)</label>
                <input type='text' name='price' value={amount} onChange={(e) => { setamount(e.target.value) }} />
                <input type='submit' value='add Transaction' id='submit' />
            </form>
        </>
    )
}