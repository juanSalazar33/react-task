import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const baseUrl = 'http://127.0.0.1:8000/api/task/';  
  
    const saveItem =  async(method, body, id) =>{
      setLoading(true);
      let featchUrl;
      let obj;
      switch (method) {
        case 'GET':
          featchUrl = baseUrl;
          obj = {
            method: "get"
          }
          break;
        case 'POST':
            featchUrl = baseUrl;
            obj = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)

            }
          break;
        case 'DELETE':
            featchUrl = baseUrl+id;
            obj = {
              method: "delete",
              headers: {
                "Content-Type": "application/json"
              },
            }
          break;
        case 'PUT':
            console.log("body",body,id);
            featchUrl = baseUrl+id;
            obj = {
              method: "put",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(body)
            }
          break;
        default:
          break;
      }
      try {
        const response = await fetch(featchUrl,obj);
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
        const data = await response.json();
        if(method === 'GET'){ 
          setItem(data);
        }else{
         // saveItem('GET');
        }
        setLoading(false);
        console.log("response::",data);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log('Error:::' + error);
      }
    }
    React.useEffect(() => {
      saveItem('GET');
      console.log("data ready");
    },[]);
   
    return {
      item,
      saveItem,
      loading,
      error,
    };
}

export {useLocalStorage}