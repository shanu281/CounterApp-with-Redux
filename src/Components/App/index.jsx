import {connect} from 'react-redux'
import Steps from '../Steps';
import {increment, decrement, reset} from '../../Store/Actions'
function App(props){



    return(
        <>
        <center>

        <h1>Counter App</h1>
        <h1>{props.count}</h1>
        <Steps/>
        <button onClick={()=> props.dispatch(increment())}>Increment</button>
        <button onClick={() => props.dispatch(decrement())}>Decrement</button>
        <button onClick={() =>props.dispatch (reset())}>Reset</button>
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