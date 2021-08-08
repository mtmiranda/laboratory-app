import React, { useEffect, useMemo, useState } from 'react'

import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'

import { Content } from '../Header/style'
import { TableWrapper } from './style'

import axios from 'axios'

function Table() {
    const [dataQuery, setDataQuery] = useState([])
    // const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => MOCK_DATA, [])

    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    //     useTable({
    //         columns,
    //         data,
    //     })

    useEffect(() => {
        axios
            .get('http://localhost:3001/api/get')
            .then((response) => {
                setDataQuery(response.data[0])

                console.log(response.data[0])
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    console.log(dataQuery)
    return (
        <TableWrapper>
            <Content>
                {/* <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}

                <table>
                    <thead>
                        <tr></tr>
                        <th>Nome_unidade</th>
                        <th>Cod_unidade</th>
                        <th>Numero_ficha</th>
                        <th>Data_ficha</th>
                        <th>Nome_completo</th>
                        <th>Dt_nascimento</th>
                        <th>Numero_Item</th>
                        <th>Numero_Subitem</th>
                        <th>Exame</th>
                    </thead>
                    <tbody>
                        {dataQuery.map((data) => (
                            <tr>
                                <td>{data.UNID_NO_UNIDADE}</td>
                                <td>{data.ID_UNID_CD_UNIDADE}</td>
                                <td>{data.ID_FICH_NR_FICHA}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(data.FICH_DH_ABERTURA)
                                    )}
                                </td>
                                <td>{data.PEFI_NO_SOBRENOME}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(data.PEFI_DH_NASCIMENTO)
                                    )}
                                </td>
                                <td>{data.ID_ITEM_NR_ITEM}</td>
                                <td>{data.ID_ITEM_NR_SUBITEM}</td>
                                <td>{data.PROD_SL_EXAME}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </TableWrapper>
    )
}

export default Table
