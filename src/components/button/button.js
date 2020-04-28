import styled from "styled-components"
import { color, shadow, space, typography, variant } from "styled-system"

const Button = styled.button(
  {
    all: "unset",
    color: "hsl(42, 15%, 13%)",
    borderRadius: "100px",
    display: "inline-block",
    textAlign: "center",
    cursor: "pointer",
    fontFamily: "Nunito",
    ":active": {
      boxShadow: "none",
    },
  },
  color,
  shadow,
  space,
  typography,
  variant({
    variants: {
      primary: {
        bg: "yellow.5",
        boxShadow:
          "inset 0 1px 0 hsl(48, 94%, 68%), 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        py: 3,
        px: 5,
        fontSize: 3,
      },
    },
  })
)

Button.defaultProps = {
  variant: "primary",
}

export default Button
