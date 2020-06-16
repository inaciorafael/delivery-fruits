import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UserIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#9586A8"
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8z"
      />
    </Svg>
  )
}

export default UserIcon
