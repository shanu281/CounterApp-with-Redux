import { createStore } from 'redux'

function counterReducer (state = {value: 0 , step: 5, max: 50},action){
    switch (action.type){
        case'increment':
        if(state.value+state.step> state.max)return  alert("Value can't exceed max assigned value")
        return {...state, value :state.value + state.step}

        case 'decrement':
            return {...state, value: state.value- state.step}

        case 'reset' :
            return {...state, value: 0}   
        
        case 'changeStep' :
            return{
                ... state, step: action.payLoad
            }    

        case 'changeMax' : 
            return{
                ...state, max: action.payLoad
            }    

        default :
        return state
    }
}
export let store = createStore(counterReducer)



