import React from 'react';

function useLocalStorage(itemName, initialValue) {

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
  
          setItems(parsedItems);
          setLoading(false);
  
        } catch (error) {
          setError(error);
        }
        
      }, 2000);
    });
    
    const saveItems = (newItem) =>{
      try {
        const stringiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringiedTodos);
        setItems(newItem);
      } catch (error) {
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