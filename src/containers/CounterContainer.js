import Counter from "../components/Counter"
import * as actions from "../actions"
import { connect } from "react-redux"

export const getRandomColor = () => {
  const colors = [
    "black",
    "Crimson",
    "GreenYellow",
    "DarkGreen",
    "Maroon",
    "Tomato",
    "Turquoise",
    "SteelBlue",
    "DimGrey",
    "DarkMagenta",
    "MediumOrchid",
    "Gold"
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

//스토어의 state값을 props로 열결
//해당 스토어의 state를 구독함
const mapStateToProps = state => ({
  color: state.color,
  number: state.number
})

//dispatch 함수를 props에 연결
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor()
    dispatch(actions.setColor(color))
  }
})

const CounterConatainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterConatainer
