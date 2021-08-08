import React from "react";
import { Content, HeaderWrapper } from "./style";

import logo from "../../assets/logo.png";

function Header() {
  return (
    <HeaderWrapper>
      <header>
        <Content>
          <img src={logo} alt="Logo laboratorio" />
          <button type="button">Consultar registros</button>
        </Content>
      </header>
    </HeaderWrapper>
  );
}

export default Header;
