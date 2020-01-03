import React from "react";

import "./styles.css";

import facebookLogo from "../../assets/facebook.png";

export default function Header() {
  return (
    <header>
      <div class="content">
        <img src={facebookLogo} alt="Facebook logo" class="logo" />
        <div class="my-profile">Meu Perfil</div>
      </div>
    </header>
  );
}
