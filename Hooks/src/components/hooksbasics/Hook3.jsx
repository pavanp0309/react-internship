import {useState} from 'react'

const Hook3 = () => {
    let [dark,setdark]=useState(true)
    function UpdateModes(){
        setdark(false)
    }

  return (
    <div>
        {/* assignment */}
      <button onClick={UpdateModes}>{dark?"🌞":"🌙"}</button>
      {dark && <h1>data</h1>}
    </div>
  )
}

export default Hook3
