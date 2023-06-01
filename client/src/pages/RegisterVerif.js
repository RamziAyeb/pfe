import { useState } from "react"
import "../styles/registerverif.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/userSlice/userSlice";
import { FaFaucet   } from 'react-icons/fa';
import { IoIosFlash } from "react-icons/io";
import { GiHandSaw} from "react-icons/gi";
import {TfiBrushAlt} from "react-icons/tfi"
import {GiHelmetHeadShot} from "react-icons/gi"
import {GrVmMaintenance} from "react-icons/gr"
const RegisterVerif = ({ping,setPing}) => {
  const user = useSelector((state) => state?.user?.user);

  const [selected, setSelected] = useState('prestataire');
  console.log(selected,"selected")
 const dispatch = useDispatch();
 const navigate = useNavigate();
  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <>
      <div className="registerverif">
        <div className="registerverif-container">
          <h2>Join as a  freelancerzzzzzzz</h2>
          <div className="clien-pres">
            <div className="clien">
              <div className="icon-inpt">
                <i className="icon"><IoIosFlash></IoIosFlash></i>
                <input
                  defaultValue={false}
                  type="radio"
                  id="electrecien"
                  value="electrecien"
                  checked={selected === "electrecien"}
                  onChange={handleChange}
                />
              </div>
              <hr></hr> 
              <h4>Électricien </h4>
            </div>
            <div className="clien">
              <div className="icon-inpt">
                <i className="icon"> <GrVmMaintenance></GrVmMaintenance></i>
                <input
                  defaultValue={false}
                  type="radio"
                  id="technicien de maintenance"
                  value="technicien de maintenance"
                  checked={selected === "technicien de maintenance"}
                  onChange={handleChange}
                />
              </div>
              <hr></hr> 
              <h4>Technicien de maintenance</h4>
            </div>
            <div className="clien">
              <div className="icon-inpt">
                <i className="icon"><GiHandSaw></GiHandSaw></i>
                <input
                  defaultValue={false}
                  type="radio"
                  id="menuisier"
                  value="menuisier"
                  checked={selected === "menuisier"}
                  onChange={handleChange}
                />
              </div>
              <hr></hr> 
              <h4>Menuisier</h4>
            </div>
            <div className="clien">
              <div className="icon-inpt">
                
                <i className="icon"> <FaFaucet></FaFaucet></i>
                <input
                  defaultValue={false}
                  type="radio"
                  id="plombier"
                  value="plombier"
                  checked={selected === "plombier"}
                  onChange={handleChange}
                />
              </div>
              <hr></hr> 
              <h4>Plombier </h4>
            </div>
            <div className="clien">
              <div className="icon-inpt">
                <i class="icon"><TfiBrushAlt></TfiBrushAlt></i>
                <input
                  type="radio"
                  id="peinteur"
                  value="peinteur"
                  onChange={handleChange}
                  checked={selected === "peinteur"}
                />
              </div>
              <hr></hr> 
              <h4>Peinteur</h4>
              
            </div>
            <div className="clien">
              <div className="icon-inpt">
                <i class="icon"><GiHelmetHeadShot></GiHelmetHeadShot></i>
                <input
                  type="radio"
                  id="forgeron"
                  value="forgeron"
                  onChange={handleChange}
                  checked={selected === "forgeron"}
                />
              </div>
              <hr></hr> 
              <h4>Forgeron</h4>           
            </div>
          </div>
          <div className="btn-reg">
            
            
                <button
              onClick={() => {
                dispatch(
                  updateUser({ id: user?._id, user: { role: selected } })
                );

                navigate("/profilepres");
                setPing(!ping);
              }}
            >
              Apply as pres
            </button>
            
          

          
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterVerif