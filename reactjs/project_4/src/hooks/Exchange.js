import { useState, useEffect } from "react"

function useExchangeRate(currency){
    const [data, getData] = useState({})
    let url = `https://v6.exchangerate-api.com/v6/4f9ddb1d97d72bb5b5779f9d/latest/${currency}`
    useEffect(()=>{
        fetch(url)
        .then((e)=> e.json())
        .then((e)=>getData(e["conversion_rates"]))
    },[currency])
    return data
}

export default useExchangeRate