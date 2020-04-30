import styled from "styled-components"
import { border, color, flexbox, space, layout } from "styled-system"

const Box = styled.div(
  { boxSizing: "border-box" },
  border,
  color,
  flexbox,
  layout,
  space
)

export default Box
