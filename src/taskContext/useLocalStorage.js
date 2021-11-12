import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    
  
    const saveItem =  async(method, body, id) =>{
      console.log("id;;",id)
      console.log("in get data");
      let featchUrl;
      let obj;
      switch (method) {
        case 'GET':
          featchUrl = 'http://127.0.0.1:8000/api/task';
          obj = {
            method: "get"
          }
          break;
        case 'POST':
            console.log("body",body);
            featchUrl ='http://127.0.0.1:8000/api/task';
            obj = {
              method: "get",
              body: body 

            }
          break;
          case 'DELETE':
            
            featchUrl ='http://127.0.0.1:8000/api/task/'+id;
            obj = {
              method: "delete",
              headers: {
                "Content-Type": "application/json"
              },
            }
          break;
        default:
          break;
      }
      

      try {
        console.log("url to delate",featchUrl);
        const response = await fetch(featchUrl,obj);
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
        const data = await response.json();
        setItem(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log('Error: ' + error);
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