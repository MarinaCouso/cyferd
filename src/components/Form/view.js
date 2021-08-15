import React, { useState } from "react"
import { ContentContainer, InputContainer, ScrollContainer } from "./styles"
import { useFormik } from "formik"
import { FormTextInput, CheckboxInput, FormError } from "../../components/FormComponents/view"
import * as Yup from "yup"
import Button from "../../components/Button/view"
import HorizontalScroll from "../../components/HorizontalScroll/view"

const validationSchema = Yup.object().shape({
  requestedBy: Yup.string().required("* Este campo es obligatorio"),
  approved: Yup.boolean().required("* Este campo es obligatorio"),
})

const handleRegister = (newRegister) => {
  console.log(newRegister)
}

const Form = ({ formInfo }) => {
  const formik = useFormik({
    initialValues: {
      requestedby: "",
      approved: false,
      equipmentId: undefined,
    },
    validationSchema: validationSchema,
  })

  const returnInputs = () => {
    return formInfo.map((input, key) => {
      const [checked, setChecked] = useState(false)

      const inputType = input.type
      const name = input.name

      const nameToVariable = name.split(" ").join("").toLowerCase()
      if (inputType === "text") {
        return (
          <InputContainer key={key}>
            <FormTextInput label={name} id={nameToVariable} name={nameToVariable} variableName={nameToVariable} formik={formik} />
            {formik.touched.requestedBy && formik.errors.requestedBy && <FormError>{formik.errors.requestedBy}</FormError>}
          </InputContainer>
        )
      } else if (inputType === "bool") {
        return (
          <InputContainer key={key}>
            <CheckboxInput
              onPress={() => {
                setChecked(!checked)
                formik.values.approved = !formik.values.approved
              }}
              checked={checked}
              label={name}
              id={nameToVariable}
            />
            {formik.touched.approved && formik.errors.approved && <FormError>{formik.errors.approved}</FormError>}
          </InputContainer>
        )
      } else if (inputType === "object") {
        return (
          <ScrollContainer key={key}>
            <HorizontalScroll handleObject={(id) => formik.setFieldValue("equipmentId", id)} />
          </ScrollContainer>
        )
      }
    })
  }
  return (
    <ContentContainer showsVerticalScrollIndicator={false}>
      {returnInputs()}
      <Button title="Send" onPress={() => handleRegister(formik.values)} type="submit" />
    </ContentContainer>
  )
}

export default Form
