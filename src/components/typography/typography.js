import styled from "styled-components"
import { color, space, typography } from "styled-system"

const Typography = styled.p(typography, space, color)

Typography.defaultProps = {
  fontFamily: "body",
  fontSize: 2,
  color: "gray.0",
  lineHeight: 1.5,
}

export default Typography
