import { useState } from "react"
import "../styles/registerverif.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/userSlice/userSlice";

const RegisterVerif = ({ping,setPing}) => {
  const user = useSelector((state) => state?.user?.user);

  const [selected, setSelected] = useState('client');
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
          <h2>Join as a client or freelancer</h2>
          <div className="clien-pres">
            <div className="clien">
              <div className="icon-inpt">
                <i className="uil uil-postcard"></i>
                <input
                  defaultValue={false}
                  type="radio"
                  id="client"
                  value="client"
                  checked={selected === "client"}
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
                  id="prestataire"
                  value="prestataire"
                  onChange={handleChange}
                  checked={selected === "prestataire"}
                />
              </div>
              <h4>I’m a freelancer, looking for work</h4>
            </div>
          </div>
          <div className="btn-reg">
            {selected == "client" ?   
            <button
              onClick={() => {
                dispatch(
                  updateUser({ id: user?._id, user: { role: selected } })
                );

                navigate("/profile");
                setPing(!ping);
              }}
            >
              Apply as worker
            </button> : 
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
            }
          

          
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterVerif