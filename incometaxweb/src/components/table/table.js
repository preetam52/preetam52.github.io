import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { tableConfig } from "./config"
import "./table.scss"

export default class TaxTable extends Component {
    render() {
        return (
            <div className="tableContainer p-3" style={{width: window.innerWidth - 30}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {tableConfig.header.map((e,i) => <th>{e.title}</th>)}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {tableConfig.rows.map((e,i) => 
                        <tr>
                            {tableConfig.header.map((ele,j) => 
                                j === 0 ? <td>{e.title}</td> : <td><input type="number" className="inp"/></td>
                            )}
                        </tr>)}
                       
                    </tbody>
                </Table>
            </div>
        )
    }
}
