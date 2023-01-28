import "./Subscription.css";

//Hooks:
import React, { useState } from "react";

//email
import nodemailer from "nodemailer";

function Subscription() {
  const [userEmail, setUserEmail] = useState("");
  const message = userEmail + " has just subscribed! ";
  function ValidateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  //Sending an email to cedroxy with the email entered by the user
  // function handleOnSubmit(message: string, email: string) {
  //   // Create a transport method
  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.example.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: "your_username",
  //       pass: "your_password",
  //     },
  //   });
  //   // Define the email options
  //   let mailOptions = {
  //     from: email,
  //     to: "daniellesalloum2@gmail.com",
  //     subject: "Subscription",
  //     text: message,
  //   };
  //   // Send the email
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Email sent: " + info.response);
  //     }
  //   });
  // }

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
          <button
            type="submit"
            className="sub-button"
            onClick={(e) => {
              //handleOnSubmit(message, userEmail);
            }}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscription;
