import { useState } from "react"
import "../styles/registerverif.css"
const RegisterVerif = () => {
  const [selected, setSelected] = useState('yes');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <>
      <div className="registerverif">
        <div className="registerverif-container">
    <h2>Join as a client or freelancer</h2>
    <div className="clien-pres">
    <div className="clien">
      <div className="icon-inpt">
      <i className="uil uil-postcard"></i>
      <input
      defaultValue={false}
          type="radio"
          id="yes"
          value="yes"
          checked={selected === 'yes'}
          onChange={handleChange}
        />

    
      </div>
      <h4>I’m a client, hiring for a service</h4>
    
    </div>
    <div className="clien">

    <div className="icon-inpt">
    <i class="uil uil-wrench"></i>
    <input
    
          type="radio"
          id="no"
          value="no"
          onChange={handleChange}
          checked={selected === 'no'}
        />


 
  
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