import React, { useContext,useEffect,useState } from 'react';
import { Datacontext } from '../context/contextprovider'
import {Chart as ChartJS} from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

export default function Chart() {

    const { state } = useContext(Datacontext)
    const data = state.length >= 1 ? state.filter((item) => {
        if (item.price < 0) {
            return {
                id: item.id,
                label: item.name,
                value: Math.abs(item.price),
                color: item.color
            }
        }
    }) : null
    
    const [userdata,setuserdata] = useState(
    //     {
    //     labels:data?.map((item)=>{return item.label}),
    //     datasets:[
    //         {
    //             label:data?.map((item)=>{return item.name}),
    //             data:data?.map((item)=>{return Math.abs(item.price)})
    //         }
    //     ]
    // }
    )
    // console.log(userdata)

    useEffect(()=>{
        setuserdata({
            labels:data?.map((item)=> {return item.name}),
            datasets:[
                {
                    label:'expense',
                    data:data?.map((item)=>{return Math.abs(item.price)}),
                    backgroundColor:data?.map((item)=>{return ('#'+item.color)}),
                    borderWidth:2
                }
            ]
        })
        console.log(userdata)
    },[state.length])

    return (
        <>
            {data?.length>=1 &&
            <div style={{width:'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h2>Expenses Chart</h2>
                <Pie data={userdata}/>
            </div>
            }

        </>
    )
}