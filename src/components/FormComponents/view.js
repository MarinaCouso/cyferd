import React from "react"
import { InputContainer, TextInput, Label } from "./styles"

export const FormTextInput = ({ label }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInput />
    </InputContainer>
  )
}
