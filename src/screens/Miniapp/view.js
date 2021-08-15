import React from "react"
import Form from "../../components/Form/view"
import { ContentContainer } from "../Home/styles"
import { ScreenContainer, HeaderContainer, AppTitle } from "./styles"

const Miniapp = () => {
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>MiniApp 1</AppTitle>
      </HeaderContainer>
      <ContentContainer>
        <Form />
      </ContentContainer>
    </ScreenContainer>
  )
}

export default Miniapp
