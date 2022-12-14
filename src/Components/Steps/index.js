import "./style.css";
import react from "react";
import { connect } from "react-redux";
import { updateStep } from "../../Store/Actions";

function Steps(props) {
  function handleStep(step) {
    props.dispatch(updateStep(step));
  }

  return (
    <div>
      <div>
        <h2>Steps</h2>
      </div>
      <div className="steps-container">
        <div
          onClick={() => handleStep(5)}
          className={props.step === 5 ? "active step" : "step"}
        >
          5
        </div>
        <div
          onClick={() => handleStep(10)}
          className={props.step === 10 ? "active step" : "step"}
        >
          10
        </div>
        <div
          onClick={() => handleStep(15)}
          className={props.step === 15 ? "active step" : "step"}
        >
          15
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    step: state.step,
  };
}
export default connect(mapStateToProps)(Steps);
