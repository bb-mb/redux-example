import React from "react"
import Counter from "./Counter"
import PropTypes from "prop-types"

import "./CounterList.css"

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    ></Counter>
  ))

  return(
    <div className="CounterList">
      {counterList}
    </div>
  )
}

export default CounterList