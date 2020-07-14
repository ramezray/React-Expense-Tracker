export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRAN":
      return {
        ...state,
        trans: state.trans.filter((tran) => tran.id !== action.payload),
      };
    case "ADD_TRAN":
      return {
        ...state,
        trans: [action.payload, ...state.trans],
      };
    default:
      return state;
  }
};
