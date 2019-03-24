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
      myStocks: [],
      symbol: ''
    }
  }

  // NOTE: change the stock symbol in fetch url to obtain the searched or selected stock by user.

  componentDidMount() {
    // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${AVkey}`)
    // .then(res => res.json())
    // .then(stocksData => this.setState({
    //   stocks: stocksData
    // }))
  }

  handleClick = () => {
    console.log('Clicked on Stock.')
    alert('Placeholder for stock onClick.')
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${AVkey}`)
    .then(res => res.json())
    .then(stocksData => this.setState({
      stocks: stocksData
    }))
  }

  render(){
    console.log('this.state.stocks is: ', this.state.stocks)

    return (
      <div>
        <h1>Display StockList Below</h1>
        <StockList stocks={this.state.stocks} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default MainPage
