import React, { useState } from 'react'

import Header from './components/Header'

import TableComponent from './components/TableComponent'

import { GlobalStyle } from './styles/global'
import './styles/global'

function App() {
    const [tableRegistries, setTableRegistries] = useState(false)

    const handleOpenNewTableRegistry = () => {
        setTableRegistries(true)
    }

    return (
        <>
            <GlobalStyle />
            <Header onOpenNewTableRegistry={handleOpenNewTableRegistry} />
            <TableComponent isOpen={tableRegistries} />
        </>
    )
}

export default App
