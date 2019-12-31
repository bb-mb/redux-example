import React from "react"
import PropTypes from "prop-types"
import "./Counter.css"

const Counter = ({
  index,
  number,
  color,
  onIncrement,
  onDecrement,
  onSetColor
}) => {
  return (
    <div
      className="Counter"
      onClick={() => {
        onIncrement(index)
      }}
      //마우스 우클릭시 메뉴가 열리는 이벤트
      //메뉴가 열리는것을 막고 onDecrement함수를 실행시킴
      onContextMenu={e => {
        e.preventDefault()
        onDecrement(index)
      }}
      onDoubleClick={() => onSetColor(index)}
      style={{
        backgroundColor: color
      }}
    >
      {number}
    </div>
  )
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: "black",
  onIncrement: () => console.warn("onIncrement not defined"),
  onDecrement: () => console.warn("onDecrement not defined"),
  onSetColor: () => console.warn("onSetColor not defined")
}

export default Counter
