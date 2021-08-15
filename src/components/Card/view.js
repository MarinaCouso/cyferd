import React from "react"
import { Container, ButtonText } from "./styles"

const Card = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}

export default Card
