import React, { Component } from 'react'
import StockList from '../components/stockList'

const AVkey = 'ZSUS82685SGFUP5B'
// For AlphaVantage API

class MainPage extends Component {
  constructor(props){
    super(props)

    this.state={
      stocks: [],
      searchInput: '',
      myStocks: []
    }
  }

  handleClick = () => {
    console.log('Clicked on Stock.')
    alert('Placeholder for stock onClick.')
  }

  render(){
    return (
      <div>
        <h1>Display StockList Below</h1>
        <StockList stocks={this.state.stocks} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default MainPage
