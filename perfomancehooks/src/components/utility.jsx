import { useState, useEffect } from 'react'

const useFetch = (url) => {
    let [data, setData] = useState([])
    console.log(data)

    async function fetchurl(url) {
        console.log(typeof url)
     try {
        let response = await fetch(url)
           .then((re)=>re.json())
           .then(da=>setData(da))
      
            
     } catch (error) {
        console.log(error)
     }
    }

    useEffect(() => {
        fetchurl(url)
    }, [])

    return {data}
}

export default useFetch
