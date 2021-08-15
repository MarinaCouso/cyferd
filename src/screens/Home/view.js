import React from "react"
import { ScreenContainer, ContentContainer, HeaderContainer, AppTitle } from "./styles"
import Button from "../../components/Button/view"
const Home = ({ navigation }) => {
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>Home</AppTitle>
      </HeaderContainer>
      <ContentContainer showsVerticalScrollIndicator={false}>
        <Button title="MiniApp 1" onPress={() => navigation.navigate("MiniApp")} />
        <Button title="MiniApp 2" />
      </ContentContainer>
    </ScreenContainer>
  )
}

export default Home
