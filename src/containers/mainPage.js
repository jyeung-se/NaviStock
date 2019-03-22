import React, { Component } from 'react'
import StockList from '../components/stockList'

const AVkey = 'ZSUS82685SGFUP5B'

class MainPage extends Component {
  constructor(props){
    super(props)

    this.state={
      allStocks: [],
      searchInput: '',
      myStocks: []
    }
  }

  render(){
    return (
      <div>
        <h1>Display StockList Below</h1>
        <StockList />
      </div>
    )
  }
}

export default MainPage
