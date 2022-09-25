import React, { useEffect, useState } from 'react'

function useAPI(apiFn:Function) {

    const [loading,setLoading]=useState<boolean>(false)
    const [error,setError]=useState<boolean>(false)
    const [data,setData]=useState<boolean>(false)


    const exec=async()=>{
        setLoading(true)
        try{
            let data=apiFn();
            setLoading(false)
            setData(data)
        }catch(e){
             setLoading(false);
             setError(true)
        }finally{
            setLoading(false)
        }

    }
  useEffect(()=>{
    exec()
  },[])



  return {loading,error,data}
  
  
}

export default useAPI