import React from 'react'
import { Content, HeaderWrapper } from './style'

import logo from '../../assets/logo.png'

function Header({ onOpenNewTableRegistry }) {
    return (
        <HeaderWrapper>
            <header>
                <Content>
                    <div className="logo-wrapper">
                        <img src={logo} alt="Logo laboratorio" />
                        <span> HelthyHeart</span>
                    </div>
                    <button
                        onClick={onOpenNewTableRegistry}
                        className="registries-btn"
                        type="button"
                    >
                        Consultar registros
                    </button>
                </Content>
            </header>
        </HeaderWrapper>
    )
}

export default Header
