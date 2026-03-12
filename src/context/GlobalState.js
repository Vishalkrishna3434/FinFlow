import React, { Children, createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const InitialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

//create Context
export const GlobalContext = createContext(InitialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  //Actions
  function DeleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    })
  }
  function AddTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    })
  }
  return (<GlobalContext.Provider value={{ transactions: state.transactions ,DeleteTransaction,AddTransaction}}>
    {children}
  </GlobalContext.Provider>
  );
}