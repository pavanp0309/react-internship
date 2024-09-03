import {useState} from 'react'

const Hook2 = () => {
    let Mobile={
        name:"iphone",
        price:20000,
        ram:'2gb'
    }

    let [data,setData]=useState(Mobile)
    console.log(data)
    function UpdateData(){
        setData({
           ...Mobile,
            ram:'6gb'
        })
    }
  return (
    <div>
  <p>{`name:${data.name}`}</p>
  <p>{`name:${data.price}`}</p>
  <p>{`name:${data.ram}`}</p>
     
    <button onClick={UpdateData}>Update</button>
    </div>
  )
}

export default Hook2
