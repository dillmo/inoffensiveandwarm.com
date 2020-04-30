import styled from "styled-components"
import { color, shadow, space, typography, variant } from "styled-system"

const Button = styled.button(
  {
    all: "unset",
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
        color: "gray.0",
        bg: "yellow.5",
        boxShadow:
          "0px 3px 0px hsl(40, 15%, 80%), inset 0px 2px 0px hsl(48, 94%, 68%)",
        py: 2,
        px: 5,
        fontSize: 4,
      },
    },
  })
)

Button.defaultProps = {
  variant: "primary",
}

export default Button
