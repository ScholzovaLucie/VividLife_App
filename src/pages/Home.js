// src/pages/Home.js
import React from "react";
import "./../css/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faRegistered } from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
    <div className="home-container">
      <img className="bacgrount_vawe" alt="" src="/img/wave.svg" />
      <div className="content_block">
        <div className="logo_block">
            <img className=" logo" alt="" src="/logo_text2.png"/>
            <img className="circle" alt="" src="/circle.png"/>
        </div>
        
        <p>Your journey to a more colorful and sober life starts here.</p>
        <div className="button-container">
          <button className="login-button">
            <FontAwesomeIcon icon={faSignIn} /> {/* Použiješ ikonu */}
          Login</button>
          <button className="register-button">
          <FontAwesomeIcon icon={faRegistered} /> {/* Použiješ ikonu */}
            Register</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
