import React from "react";

import "./styles.css";

import facebookLogo from "../../assets/facebook.png";

export default function Header() {
  return (
    <header>
      <div className="content">
        <img src={facebookLogo} alt="Facebook logo" className="logo" />
        <div className="my-profile">Meu Perfil</div>
      </div>
    </header>
  );
}
