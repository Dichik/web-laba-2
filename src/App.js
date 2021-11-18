import './App.css';
import {useState} from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textMessage, setTextMessage] = useState("");

  //  TODO add database connection (Supabase, or another)
  return (
    <div>
        <input type={"name"} placeholder={"Enter your name"}
               className={"inputField nameInputField centerBlock"} />
        <input type={"email"} placeholder={"Enter your email"}
               className={"inputField emailInputField centerBlock"} />
        <input type={"password"} placeholder={"Enter your password"} />
        {/*FIXME remove password field*/}
    {/*    TODO add an ability to enter a text (message) - no null*/}
    </div>
  );
}
//TODO frame for inputs fields = [name, email, phone, message]
//TODO add validation for inputs
//TODO add css files
export default App;
