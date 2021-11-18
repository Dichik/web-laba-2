import './App.css';
// import sendEmail from './Mailer'
import {useState} from "react";
import Spinner from "./Speener";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textMessage, setTextMessage] = useState("");
    const [submitBlocked, setSubmitBlocked] = useState(false);
    const [activeField, setActiveField] = useState(0);
    const [sendingEmail, setSendingEmail] = useState(false);

    let regEmail = /^[a-zA-Z-0-9]+@[a-zA-Z-0-9]+\.[A-Za-z]+$/

    const showErrorMessage = (str, errorNumber) => {
        if(errorNumber === 1) {
            alert("There is an empty string...");
        } else {
            alert("There is something wrong with your email");
        }
    }

    const notEmpty = (str) => {
        if(str === "") {
            showErrorMessage(str, 1);
            return false;
        }
        return true;
    }

    const checkEmail = () => {
        if(!regEmail.test(email)) {
            showErrorMessage(email, 2)
            return false;
        }
        return true;
    }

    const submitData = () => {
        if(!submitBlocked) {
            setSubmitBlocked(true);
            if(notEmpty(name) && notEmpty(textMessage) && checkEmail()) {
                setSendingEmail(true);
                sendEmail(name, email, textMessage);
                // setSendingEmail(false);
                resetData();
            } else setSubmitBlocked(false);
        }
    }

    const resetData = () => {
        setName("");
        setEmail("");
        setTextMessage("");
        setSubmitBlocked(false);
        setActiveField(0);
    }

    const allFieldsEmpty = () => {
        return (email === "" && name === "" && textMessage === "");
    }

    const sendEmail = (name, email, textMessage) => {
        // console.log(name)
    }

  //  TODO add database connection (Supabase, or another)
  return (
      <div>
          { !sendingEmail ?
          <div>
              {/*TODO message about a successfully sent data*/}
              {/*TODO send email with a text*/}
              {/*TODO add header*/}
              <input type={"name"} placeholder={"Enter your name"}
                     className={"inputField nameInputField centerBlock"}
                     value={name}
                     onChange={event => setName(event.target.value)}
                     onFocus={() => setActiveField(1)}
                     onBlur={() => setActiveField(0)}
                     style={{
                         borderBottom: activeField === 1 ? '3px solid #10fc2a' : null
                     }}
                  // TODO light-green color if a field is filled
              />
              <input type={"email"} placeholder={"Enter your email"}
                     value={email}
                     onChange={(event => setEmail(event.target.value))}
                     onFocus={() => setActiveField(2)}
                     onBlur={() => setActiveField(0)}
                     style={{
                         borderBottom: activeField === 2 ? '3px solid #10fc2a' : null
                     }}
                     className={"inputField emailInputField centerBlock"}
              />
              {/*TODO red color if a field has error for a 3 seconds*/}
              <input type={"text"} placeholder={"Enter your message here"}
                     value={textMessage}
                     onChange={event => setTextMessage(event.target.value)}
                     className={"inputField textField centerBlock"}
                     onFocus={() => setActiveField(3)}
                     onBlur={() => setActiveField(0)}
                     style={{
                         borderBottom: activeField === 3 ? '3px solid #10fc2a' : null
                     }}
              />
              <button className={"centerBlock submitButton"}
                      onClick={submitData}
                      disabled={submitBlocked}
                      style={{
                          background: submitBlocked ? '#05acbb' : null
                      }}
              >
                  Submit
              </button>
              <button className={"centerBlock resetButton"}
                      disabled={allFieldsEmpty()}
                      onClick={resetData}>
                  Reset
              </button>
          </div> : Spinner()
          }
      </div>
  );
}
//TODO add css files
export default App;
