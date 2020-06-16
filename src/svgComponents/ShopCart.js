import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ShopCart(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#9586A8"
        d="M5.143 5h17.143L20.57 15.286H6.857L5.143 5zm3.428 16a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286zm10.286 0a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286zM5.143 5H1.714"
      />
    </Svg>
  )
}

export default ShopCart
