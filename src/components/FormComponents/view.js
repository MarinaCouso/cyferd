import React, { useState } from "react"
import { ErrorText, InputContainer, TextInput, Label, CheckBoxContainerStyle, LabelStyle, CheckboxIcon } from "./styles"
import { CheckBox } from "react-native-elements"
import checkedIcon from "../../assets/checkedIcon.png"
import uncheckedIcon from "../../assets/uncheckedIcon.png"
export const FormTextInput = ({ label, variableName, formik }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInput
        type="text"
        keyboardType="default"
        value={formik.values.variableName}
        onChangeText={formik.handleChange(variableName)}
        onBlur={formik.handleBlur(variableName)}
      />
    </InputContainer>
  )
}

export const CheckboxInput = ({ label, checked, onPress }) => {
  return (
    <InputContainer>
      <CheckBox
        checked={checked}
        onPress={onPress}
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
