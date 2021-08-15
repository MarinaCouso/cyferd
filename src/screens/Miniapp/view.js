import React from "react"
import { FormTextInput } from "../../components/FormComponents/view"
import { ContentContainer } from "../Home/styles"
import { ScreenContainer, HeaderContainer, AppTitle } from "./styles"

const MiniApp = () => {
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>MiniApp 1</AppTitle>
      </HeaderContainer>
      <ContentContainer>
        <FormTextInput label="Requested By" />
        <FormTextInput label="Requested By" />
        <FormTextInput label="Requested By" />
        <FormTextInput label="Requested By" />
      </ContentContainer>
    </ScreenContainer>
  )
}

export default MiniApp
