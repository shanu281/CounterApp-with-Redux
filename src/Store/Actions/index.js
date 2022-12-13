import Steps from "../../Components/Steps";

export function increment() {
  return {
    type: "increment",
  };
}
export function decrement() {
  return {
    type: "decrement",
  };
}
export function reset() {
  return {
    type: "reset",
  };
}
export function updateStep(step){
    return{
        type : 'changeStep',
        payLoad : step,
    }
}
