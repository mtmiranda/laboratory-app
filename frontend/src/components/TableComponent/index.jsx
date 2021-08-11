import React, { useEffect, useState } from 'react'

import { Content } from '../TableComponent/style'
import { Container, TableWrapper } from './style'

// import Table from 'react-bootstrap/Table'

import BootstrapTable from 'react-bootstrap-table-next'

import paginationFactory from 'react-bootstrap-table2-paginator'
import * as ReactBootstrap from 'react-bootstrap'

import axios from 'axios'

function TableComponent({ isOpen }) {
    const [dataQuery, setDataQuery] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        { dataField: 'UNID_NO_UNIDADE', text: 'Nome_unidade' },
        { dataField: 'ID_UNID_CD_UNIDADE', text: 'Cod_unidade' },
        { dataField: 'ID_FICH_NR_FICHA', text: 'Numero_ficha' },
        { dataField: `FICH_DH_ABERTURA`, text: 'Data_ficha' },
        { dataField: 'PEFI_NO_SOBRENOME', text: 'Nome_completo' },
        { dataField: 'PEFI_DH_NASCIMENTO', text: 'Dt_nascimento' },
        { dataField: 'ID_ITEM_NR_ITEM', text: 'Numero_Item' },
        { dataField: 'ID_ITEM_NR_SUBITEM', text: 'Numero_Subitem' },
        { dataField: 'PROD_SL_EXAME', text: 'Exame' },
    ]

    const rowStyle = (row, rowIndex) => {
        return { overflowWrap: 'break-word' }
    }

    useEffect(() => {
        axios
            .get('http://localhost:3001/api/get')
            .then((response) => {
                setDataQuery(response.data[0])
                setLoading(true)
                console.log(response.data[0])
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <Container>
            {isOpen ? (
                <TableWrapper isOpen={isOpen}>
                    <Content>
                        {loading ? (
                            <BootstrapTable
                                hover={true}
                                condensed={true}
                                rowStyle={rowStyle}
                                wrapperClasses="table-responsive"
                                headerWrapperClasses="table-responsive header-word-wrap"
                                keyField="name"
                                data={dataQuery}
                                columns={columns}
                                pagination={paginationFactory()}
                            ></BootstrapTable>
                        ) : (
                            <ReactBootstrap.Spinner animation="border" />
                        )}
                    </Content>
                </TableWrapper>
            ) : (
                <Content>
                    <div className="home-wrapper">
                        <h4>
                            Seja bem vindo ao sistema de registros do
                            <span> Grupo Fleury</span>
                        </h4>

                        <p>
                            Clique no botão "Consultar registros" para iniciar
                            sua consulta!
                        </p>
                    </div>
                </Content>
            )}
        </Container>
    )
}

export default TableComponent
