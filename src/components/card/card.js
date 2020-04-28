import styled from "styled-components"
import { shadow, variant, space, layout, border } from "styled-system"

const Card = styled.div(
  {
    borderRadius: "16px",
    boxSizing: "border-box",
  },
  shadow,
  space,
  layout,
  border,
  variant({
    variants: {
      default: {
        boxShadow: 2,
        p: 5,
        bg: "gray.9",
      },
      emphasized: {
        boxShadow: 2,
        p: 5,
        bg: "gray.9",
        borderTopWidth: 3,
        borderTopStyle: "solid",
        borderTopColor: "red.5",
      },
    },
  })
)

Card.defaultProps = {
  variant: "default",
}

export default Card
