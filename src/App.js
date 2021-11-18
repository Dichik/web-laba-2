import './App.css';
// import sendEmail from './Mailer'
import {useState} from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textMessage, setTextMessage] = useState("");
    const [submitBlocked, setSubmitBlocked] = useState(false);

    let regEmail = /^[a-zA-Z-0-9]+@[a-zA-Z-0-9]+\.[A-Za-z]+$/

    const showErrorMessage = (str, errorNumber) => {
        // 1 - empty string in name or text
        // 2 - smth wrong with email
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
                sendEmail(name, email, textMessage);
            }
        }
    }

    const resetData = () => {
        setName("");
        setEmail("");
        setTextMessage("");
        setSubmitBlocked(false);
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
        {/*TODO message about a successfully sent data*/}
        {/*TODO send email with a text*/}
        {/*TODO add header*/}
        <input type={"name"} placeholder={"Enter your name"}
               className={"inputField nameInputField centerBlock"}
               value={name}
               onChange={event => setName(event.target.value)}
        />
        <input type={"email"} placeholder={"Enter your email"}
               value={email}
               onChange={(event => setEmail(event.target.value))}
               className={"inputField emailInputField centerBlock"} />
        <input type={"text"} placeholder={"Enter your message here"}
               value={textMessage}
               onChange={event => setTextMessage(event.target.value)}
               className={"inputField textField centerBlock"} />
        {/*TODO add speener*/}
        <button className={"centerBlock submitButton"}
                onClick={submitData}
                disabled={submitBlocked}
        >
            Submit
        </button>
        <button className={"centerBlock resetButton"}
                disabled={allFieldsEmpty()}
                onClick={resetData}>
            Reset
        </button>
    {/*    TODO add an ability to enter a text (message) - no null*/}
    </div>
  );
}
//TODO add validation for inputs
//TODO add css files
export default App;
