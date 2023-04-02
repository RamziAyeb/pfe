import { useState } from "react"
import "../styles/registerverif.css"
const RegisterVerif = () => {
  const [clientSelected, setClientSelected] = useState(false)
  const [presSelected, setPresSelected] = useState(false)

  console.log(clientSelected,'radioo')
  console.log(presSelected,'presssssssss')

  return (
    <>
      <div className="registerverif">
        <div className="registerverif-container">
    <h2>Join as a client or freelancer</h2>
    <div className="clien-pres">
    <div className="clien">
      <div className="icon-inpt">
      <i className="uil uil-postcard"></i>
      {!presSelected ? 
        <input onClick={()=>setPresSelected(true)}   type="radio" defaultChecked={false}/> : 
        <input  onClick={()=>setPresSelected(false)}   type="radio" />

      
      }


    
      </div>
      <h4>I’m a client, hiring for a service</h4>
    
    </div>
    <div className="clien">

    <div className="icon-inpt">
    <i class="uil uil-wrench"></i>
 {!clientSelected ?
  <input onClick={()=>setClientSelected(true)}  type="radio" defaultChecked={false}/>  : 
  <input onClick={()=>setClientSelected(false)}    type="radio" defaultChecked={true}/> 
 }


 
  
      </div>
      <h4>I’m a freelancer, looking for work</h4>
    
    </div>
    </div>
    <div className="btn-reg">
    <button>Apply as worker</button>

    </div>
        </div>
        
      </div>
    </>
  )
}

export default RegisterVerif