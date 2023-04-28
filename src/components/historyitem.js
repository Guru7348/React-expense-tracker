import '../App.css'
import { useContext } from 'react';
import { Datacontext } from '../context/contextprovider';

export default function Item({item}) {

    const {dispatch} = useContext(Datacontext)

    const deletetrans=()=>{
        dispatch({type:'deletetransaction',payload:item.id})
    }
    
    const style = {
        borderRightColor: item.price > 0 ?'green':'red',
        // borderRight:'4px solid',
        display:'flex',
        flexDirection:'row'
    }

    return (
        <div className='item' style={style} key={item.id}>
            <label className='x' style={{backgroundColor:'red',fontSize:'medium',alignSelf:'center',position:'fixed'}} onClick={deletetrans}>X</label>
            <div className='itemdes' ><span>{item.name}</span><span>&#8377;{Math.abs(item.price)}</span></div>
        </div>
    )
}