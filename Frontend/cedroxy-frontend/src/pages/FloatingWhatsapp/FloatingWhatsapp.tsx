import React from "react";
import "./FloatingWhatsapp.css";

function FloatingWhatsapp() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      <a
        href="https://wa.me/qr/GR6MOWFQAJJWK1"
        className="floating"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp fab-icon"></i>
      </a>
    </div>
  );
}

export default FloatingWhatsapp;
