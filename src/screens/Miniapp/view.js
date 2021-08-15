import React from "react"
import { FormTextInput, CheckboxInput } from "../../components/FormComponents/view"
import { ContentContainer } from "../Home/styles"
import { ScreenContainer, HeaderContainer, AppTitle } from "./styles"

const Miniapp = () => {
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>MiniApp 1</AppTitle>
      </HeaderContainer>
      <ContentContainer>
        <FormTextInput label="Requested By" />
        <CheckboxInput label="Approved" />
      </ContentContainer>
    </ScreenContainer>
  )
}

export default Miniapp
