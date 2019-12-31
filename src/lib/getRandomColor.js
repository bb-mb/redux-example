const getRandomColor = () => {
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

export default getRandomColor