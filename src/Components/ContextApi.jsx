import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

let ApiData = createContext()




const ContextApi = ({children}) => {

    let [context, setcontext] = useState([])

    let getData = ()=>{
    
        axios.get("https://furniture-api.fly.dev/v1/products?limit=100&offset=0").then((response)=>{
    
             setcontext(response.data.data);
            
    
        })
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <>
    <ApiData.Provider value={context}>{children}</ApiData.Provider>
    </>
  )
}

export {ContextApi, ApiData}