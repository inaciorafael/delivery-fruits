import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Grid(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill="#7203FF"
        stroke="#7203FF"
        d="M10 21H3v-7h7v7zm11 0h-7v-7h7v7zm0-11h-7V3h7v7zm-11 0H3V3h7v7z"
      />
    </Svg>
  )
}

export default Grid
