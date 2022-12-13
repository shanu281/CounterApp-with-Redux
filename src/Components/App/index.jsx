import {connect} from 'react-redux'
function App(props){

function handleIncrement(){
    props.dispatch({
        type: 'increment'
    });
}
function handleDecrement(){
    props.dispatch({
        type: 'decrement'
    });
}
function handleReset(){
    props.dispatch({
        type: 'reset'
    }); 
}
    return(
        <>
        <center>

        <h1>Counter App</h1>
        <h1>{props.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </center>
        </>
    )
}
function getCount(state){
return{
    count : state.value,
}
}
export default connect(getCount) (App)