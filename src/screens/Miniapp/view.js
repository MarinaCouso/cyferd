import React from "react"
import Form from "../../components/Form/view"
import { ContentContainer } from "../Home/styles"
import { ScreenContainer, HeaderContainer, AppTitle } from "./styles"

const Miniapp = ({ route }) => {
  const { appInfo } = route.params
  console.log(appInfo, "at miniaoo")
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>{appInfo?.name}</AppTitle>
      </HeaderContainer>
      <ContentContainer>
        <Form />
      </ContentContainer>
    </ScreenContainer>
  )
}

export default Miniapp
