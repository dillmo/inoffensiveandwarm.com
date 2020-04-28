import styled from "styled-components"
import { color, space, typography } from "styled-system"

import { access } from "../../util"

const Typography = styled.p(
  {
    em: {
      fontStyle: "normal",
      color: props => access(props.emColor, props.theme.colors),
    },
  },
  typography,
  space,
  color
)

Typography.defaultProps = {
  fontFamily: "body",
  fontSize: 2,
  color: "gray.0",
  lineHeight: 1.5,
  emColor: "gray.9",
}

export default Typography
