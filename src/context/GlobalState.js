import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  trans: [
    { id: 1, text: "Gas", amount: -160 },
    { id: 2, text: "Salary", amount: 800 },
    { id: 3, text: "Bills", amount: -250 },
    { id: 4, text: "Food", amount: -300 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTran = (id) => {
    dispatch({
      type: "DELETE_TRAN",
      payload: id,
    });
  };

  const addTran = (tran) => {
    dispatch({
      type: "ADD_TRAN",
      payload: tran,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        trans: state.trans,
        deleteTran,
        addTran,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
