import React from "react"
import { Container, ButtonText } from "./styles"

const Button = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}

export default Button
