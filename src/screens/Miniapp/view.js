import React from "react"
import Form from "../../components/Form/view"
import { ContentContainer } from "../Home/styles"
import { ScreenContainer, HeaderContainer } from "./styles"
import { AppTitle } from "../../components/TextComponents/styles"

const Miniapp = ({ route }) => {
  const { appInfo } = route.params
  console.log(appInfo, "at miniaoo")
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>{appInfo?.name}</AppTitle>
      </HeaderContainer>
      <ContentContainer>
        <Form formInfo={appInfo?.fields} />
      </ContentContainer>
    </ScreenContainer>
  )
}

export default Miniapp
