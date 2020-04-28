import React from "react"
import Card from "./card"

export default {
  component: Card,
  title: "Atoms/Card",
}

export const Default = () => <Card width={384} height={256} m={5} />

export const Emphasized = () => (
  <Card variant="emphasized" width={384} height={256} m={5} />
)
