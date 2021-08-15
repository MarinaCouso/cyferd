import React from "react"
import { ContentContainer } from "./styles"
import { useFormik } from "formik"
import { FormTextInput, CheckboxInput } from "../../components/FormComponents/view"
import * as Yup from "yup"
import Button from "../../components/Button/view"

const validationSchema = Yup.object().shape({
  requestedBy: Yup.string().required("* Este campo es obligatorio"),
  approved: Yup.boolean().required("* Este campo es obligatorio"),
})

const Form = () => {
  const formik = useFormik({
    initialValues: {
      requestedBy: "",
      approved: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })

  return (
    <ContentContainer showsVerticalScrollIndicator={false}>
      <FormTextInput
        label="Requested By"
        id="requestedBy"
        name="requestedBy"
        type="text"
        keyboardType="default"
        value={formik.values.requestedBy}
        onChangeText={formik.handleChange("requestedBy")}
        onBlur={formik.handleBlur("requestedBy")}
        autoCapitalize="none"
      />
      {formik.touched.title && formik.errors.title && <FormError>{formik.errors.title}</FormError>}
      <CheckboxInput label="Approved" />
      <Button title="Send" />
    </ContentContainer>
  )
}

export default Form
