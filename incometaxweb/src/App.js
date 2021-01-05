import React, { Component } from 'react'
import Table from './components/table/table'
//import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import TaxTable from "./components/table/table"

export default class App extends Component {
  render() {
    return (
      <div>
        <TaxTable/>
      </div>
    )
  }
}
