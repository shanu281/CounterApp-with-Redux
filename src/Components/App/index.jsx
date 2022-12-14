import { connect } from "react-redux";
import "./style.css";
import Steps from "../Steps";
// import { increment, decrement, reset } from "../../Store/Actions";
import MaxValue from "../MaxValue";

function App(props) {

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
  return (
    <>
      <center>
        <h1>Counter App</h1>
        <h1>{props.count}</h1>
        <div className="flex  display-steps">
          <Steps />
          <MaxValue />
        </div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button> 
     
        {/* <button onClick={() => props.dispatch(increment())}>Increment</button>
        <button onClick={() => props.dispatch(decrement())}>Decrement</button>
        <button onClick={() => props.dispatch(reset())}>Reset</button> */}
      </center>
    </>
  );
}
function getCount(state) {
  return {
    count: state.value,
  };
}
export default connect(getCount)(App);
