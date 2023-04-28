
export default function reducer(state,action){
    switch(action.type){
        case 'deletetransaction':
            return state.filter((trans)=>trans.id!==action.payload);

        case 'addtransaction':
            return [
                ...state,
                action.payload
            ]
        
        default :
            return state;
    }
}