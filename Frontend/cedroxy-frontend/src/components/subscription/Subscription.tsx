import "./Subscription.css";
//Hooks:
import React, { useState } from "react";

function Subscription() {
  const [userEmail, setUserEmail] = useState("");
  // const message = userEmail + " has just subscribed! ";
  // function ValidateEmail(mail: string) {
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
  //     return true;
  //   }
  //   return false;
  // }

  //Sending an email to cedroxy with the email entered by the user

  return (
    <div className="subscription-container">
      <form className="subscription">
        <div className="subscription-info">
          <div className="subscription-text">For more info, Subscribe!!</div>
          <input
            className="subscription-section"
            type="text"
            value={userEmail}
            placeholder="Email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button type="submit" className="sub-button" onClick={(e) => {}}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscription;
