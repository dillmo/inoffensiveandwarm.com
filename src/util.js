export const handleButtonEvent = f => x => event => {
  if (event?.type === "click" || ["Enter", "Space"].includes(event?.key)) {
    f(x)
  }
}

export const access = (str, obj) =>
  str.split(".").reduce((acc, prop) => acc?.[prop], obj) ?? str
