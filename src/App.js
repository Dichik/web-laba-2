import { useState } from "react";
import Spinner from "./Spinner";
import emailjs from "emailjs-com";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [submitBlocked, setSubmitBlocked] = useState(false);
  const [activeField, setActiveField] = useState(0);
  const [loading, setLoading] = useState(false);

  let regEmail = /^[a-zA-Z-0-9]+@[a-zA-Z-0-9]+\.[A-Za-z]+$/;

  const showErrorMessage = (str, errorNumber) => {
    if (errorNumber === 1) {
      alert("There is an empty string...");
    } else if (errorNumber === 2) {
      alert("There is something wrong with your email...");
    } else if (errorNumber === 3) {
      alert(str);
    }
  };

  const notEmpty = (str) => {
    if (str === "") {
      showErrorMessage(str, 1);
      return false;
    }
    return true;
  };

  const checkEmail = () => {
    if (!regEmail.test(email)) {
      showErrorMessage(email, 2);
      return false;
    }
    return true;
  };

  const wait = async () => {
    setTimeout(() => console.log("Loading..."), 5000);
  };

  const submitData = async () => {
    if (!submitBlocked) {
      setSubmitBlocked(true);
      if (notEmpty(name) && notEmpty(textMessage) && checkEmail()) {
        setLoading(true);
        await wait();
        await sendEmail(name, email, textMessage);
      } else setSubmitBlocked(false);
    }
  };

  const resetData = async () => {
    setName("");
    setEmail("");
    setTextMessage("");
    setSubmitBlocked(false);
    setActiveField(0);
    setLoading(false);
  };

  const allFieldsEmpty = () => {
    return email === "" && name === "" && textMessage === "";
  };

  const showMessageAboutSuccess = () => {
    alert("Your message was successfully sent");
    resetData();
  };

  const sendEmail = async () => {
    emailjs.init("user_AJGy3zMpNl2Rxs4CFFafD");
    let form = {
      name: name,
      email: email,
      textMessage: textMessage,
    };
    emailjs.send("service_tauvzqc", "template_26nh4ab", form).then(
      (result) => {
        console.log(result.text);
        showMessageAboutSuccess();
      },
      (error) => {
        console.log(error.text);
        showErrorMessage("Error, your message wasn't sent", 3);
      }
    );
  };

  return (
    <div>
      {!loading ? (
        <div>
          <header className={"headerClass"}>
            <h1>Sending message</h1>
          </header>
          <input
            type={"name"}
            placeholder={"Enter your name"}
            className={"inputField nameInputField centerBlock"}
            value={name}
            onChange={(event) => setName(event.target.value)}
            onFocus={() => setActiveField(1)}
            onBlur={() => setActiveField(0)}
            style={{
              borderBottom: activeField === 1 ? "3px solid #10fc2a" : null,
            }}
            // TODO light-green color if a field is filled
          />
          <input
            type={"email"}
            placeholder={"Enter your email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={() => setActiveField(2)}
            onBlur={() => setActiveField(0)}
            style={{
              borderBottom: activeField === 2 ? "3px solid #10fc2a" : null,
            }}
            className={"inputField emailInputField centerBlock"}
          />
          {/*TODO red color if a field has error for a 3 seconds*/}
          <input
            type={"text"}
            placeholder={"Enter your message here"}
            value={textMessage}
            onChange={(event) => setTextMessage(event.target.value)}
            className={"inputField textField centerBlock"}
            onFocus={() => setActiveField(3)}
            onBlur={() => setActiveField(0)}
            style={{
              borderBottom: activeField === 3 ? "3px solid #10fc2a" : null,
            }}
          />
          <button
            className={"centerBlock submitButton"}
            onClick={submitData}
            disabled={submitBlocked}
            style={{
              background: submitBlocked ? "#05acbb" : null,
            }}
          >
            Submit
          </button>
          <button
            className={"centerBlock resetButton"}
            disabled={allFieldsEmpty()}
            onClick={resetData}
          >
            Clear
          </button>
        </div>
      ) : (
        Spinner()
      )}
    </div>
  );
}

export default App;
