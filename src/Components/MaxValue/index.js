import { connect } from "react-redux";
import "./style.css";
import { updateMax } from "../../Store/Actions";

function MaxValue(props) {
  function handleMax(max) {
      props.dispatch(updateMax(max) )
  }

  return (
    <div >
      <div>
        <h2>Max Value</h2>
      </div>
      <div className="max-container">
        <div
          onClick={() => handleMax(50)}
          className={props.max === 50 ? "active step" : "step"}
        >
          50
        </div>
        <div
          onClick={() => handleMax(100)}
          className={props.max === 100 ? "active step" : "step"}
        >
          100
        </div>
        <div
          onClick={() => handleMax(200)}
          className={props.max === 200 ? "active step" : "step"}
        >
          200
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    max: state.max,
  };
}
export default connect(mapStateToProps)(MaxValue);
