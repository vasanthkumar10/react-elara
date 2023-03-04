export const initialState = {
  count: 0,
  input: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.value };
    case "DECREMENT":
      return { ...state, count: state.count - action.value };
    case "RESET":
      return initialState;
    case "ADD":
      return { ...state, input: action.value };
    default:
      return state;
  }
};
