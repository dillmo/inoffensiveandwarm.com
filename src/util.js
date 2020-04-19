export const handleButtonEvent = f => x => event => {
  if (event?.type === "click" || ["Enter", "Space"].includes(event?.key)) {
    f(x)
  }
}
