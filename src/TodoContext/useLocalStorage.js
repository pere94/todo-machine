import React from 'react';
import { act } from 'react-dom/test-utils';

function useLocalStorage(itemName, initialValue) {

  // useReducer Ejemplo Comentado------------------------------------------------------------------

  // const initialState = {
  //   error: false,
  //   loading: true,
  //   item: initialValue,
  // };

  // Action Types
  // const actionTypes = {
  //   error: 'ERROR',
  //   success: 'SUCCESS',
  // };

  // Action Creators
  // const onError = (error) => {
  //   dispatch({type: actionTypes.error, payload: error});
  // }

  // const onSuccess = (parsedItem) => {
  //   dispatch({type: actionTypes.success, payload: parsedItem});
  // }
  //-----------------------------------------
  // REDUCER
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case actionTypes.error:
  //       return {
  //         ...state,
  //         error: true,
  //       };  
  //     case actionTypes.success:
  //       return {
  //         ...state,
  //         loading: false,
  //         item: action.payload,
  //       };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = React.useReducer(reducer, initialState);

  // const {
  //   error,
  //   loading,
  //   item,
  // } = state;

  // useReducer Ejemplo------------------------------------------------------------------

  const [error,setError] = React.useState(false);
  const [loading,setLoading] = React.useState(true);
  const [item,setItems] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
        
        if(!localStorageItem) {
          localStorageItem = localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }
        console.log('setTimeOut');
        // onSuccess(parsedItems);
        setItems(parsedItems);
        setLoading(false);

      } catch (error) {
        // onError(error);
        setError(error);
      }
      
    }, 2000);
  }, []);
    
  const saveItems = (newItem) =>{
    try {
      const stringiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringiedTodos);
      // onSuccess(newItem);
      setItems(newItem);
    } catch (error) {
      // onError(error);
      setError(error);
    }
  }
  
  return {
    item, 
    saveItems,
    loading,
    error,
  };
  
}

export { useLocalStorage };