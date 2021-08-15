import React, { useState } from "react"
import { InputContainer, TextInput, Label, CheckBoxContainerStyle, LabelStyle, CheckboxIcon } from "./styles"
import { CheckBox } from "react-native-elements"
import checkedIcon from "../../assets/checkedIcon.png"
import uncheckedIcon from "../../assets/uncheckedIcon.png"
export const FormTextInput = ({ label }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInput />
    </InputContainer>
  )
}

export const CheckboxInput = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <InputContainer>
      <CheckBox
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
        checkedIcon={<CheckboxIcon source={checkedIcon} />}
        uncheckedIcon={<CheckboxIcon source={uncheckedIcon} />}
        title={label}
        containerStyle={CheckBoxContainerStyle}
        textStyle={LabelStyle}
      />
    </InputContainer>
  )
}

export const FormError = ({ children }) => {
  return <ErrorText>{children}</ErrorText>
}
