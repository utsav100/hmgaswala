import React from "react";
import "./App.css";
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_6xyy3up";
const TEMPLATE_ID = "template_oxmyr2p";
const USER_ID = "user_Zy0vWPfciVYxT7TqEy0z8";

function App() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [msg, setMsg] = React.useState("");

  function handleClick() {
    console.log(email)
    var data = {
      to_email:email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
      }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter your email here
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
placeholder="Email: "
          ></input>
          <input type="text" onChange={(event)=> setName(event.target.name)} placeholder="Name: "/>
          <input type="text" onChange={(event)=> setMsg(event.target.msg)} placeholder="Message: "/>
          <button type="submit" onClick={handleClick}>
            Send mail
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
