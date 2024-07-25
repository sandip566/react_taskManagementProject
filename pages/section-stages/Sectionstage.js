import React, { useState } from "react";
import "./Sectionstage.css";
import axios from 'axios';
import backimg from "../../Assets/section.png";
import frontimg from "../../Assets/section1.png";
import { useNavigate } from "react-router-dom";

//import { Link } from "react-router-dom";

function SectionStage() {
  const [todo, setTodo] = useState('');
  const [doing, setDoing] = useState('');
  const [done, setDone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // eslint-disable-next-line
  const handleContinue = () => {
    if (validateFields()) {
      // Validation passed, you can continue
      console.log("Validation passed. Todo:", todo, "Doing:", doing, "Done:", done);
    }
  };

  const validateFields = () => { 
    if (todo.trim() === '' || doing.trim() === '' || done.trim() === '') {
      setError("Please fill in all the fields.");
      return false;
    }
    setError('');
    return true;
  };

  const PosthandleContinue = async () => {
    if (validateFields()) {
      try {
        const response = await axios.post("https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/tasks/", {
          todo: todo,
          doing: doing,
          done: done
        });
        alert('Save successful');
        navigate('/listlayout')

        console.log("Data Post successful:", response.data);
      } catch (error) {
        console.error("Error occurred while sending options to the server:", error);
      }
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <h4>
              {" "}
              <b>Baap</b>{" "}
            </h4>

            <div className="margin-left">
              <div className="font">
                <p>How would you group these tasks into sections or stages?</p>
              </div>

              <div style={{ marginTop: "1vw" }}>
                <input type="text" placeholder="To do" className="wid" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <br />
                <input type="text" placeholder="Doing" className="wid" value={doing} onChange={(e) => setDoing(e.target.value)} />
                <br />
                <input type="text" placeholder="Done" className="wid" value={done} onChange={(e) => setDone(e.target.value)} />
              </div>
              {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
              <br />
              <button type="button" className="btn btn-info pl-4 pr-4" onClick={PosthandleContinue}>
                Continue
              </button>
            </div>
          </div>

          <div className="col-6">
            <div>
              <img
                src={backimg}
                alt=""
                style={{
                  position: "fixed",

                  width: "36vw",
                  height: "32vw",
                }}
              />
              <img
                src={frontimg}
                alt=""
                style={{
                  position: "fixed",
                  top: "22%",
                  left: "60%",

                  width: "36vw",
                  height: "32vw",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionStage;
