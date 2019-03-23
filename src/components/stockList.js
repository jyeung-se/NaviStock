import React from 'react'
import Stock from './stockList'

const StockList = props => {
  console.log('StockList props: ', props)

  const mappedStocks = props.stocks.map((stock, index) => <Stock stock={stock} key={index} handleClick={props.handleClick} />)

  return (
    <div>
      <h3 onClick={props.handleClick}>Stock 1</h3>
      <h3 onClick={props.handleClick}>Stock 2</h3>
      <h3 onClick={props.handleClick}>Stock 3</h3>
      <h3 onClick={props.handleClick}>Stock 4</h3>
      <h3 onClick={props.handleClick}>Stock 5</h3>
      <h3 onClick={props.handleClick}>Stock 6</h3>
      <h3 onClick={props.handleClick}>Stock 7</h3>
      <h3 onClick={props.handleClick}>Stock 8</h3>
      <h3 onClick={props.handleClick}>Stock 9</h3>
      <h3 onClick={props.handleClick}>Stock 10</h3>

      {mappedStocks}
    </div>
  )
}

export default StockList
