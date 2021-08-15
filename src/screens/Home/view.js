import React, { useState, useEffect } from "react"
import { ScreenContainer, ContentContainer, HeaderContainer, AppTitle } from "./styles"
import Button from "../../components/Button/view"
import { getData } from "../../services/dataService"

const Home = ({ navigation }) => {
  const [appsInfo, setAppsInfo] = useState([])

  const getDataFromService = async () => {
    const json = await getData()
    setAppsInfo(json)
  }
  useEffect(() => {
    getDataFromService()
  }, [])
  console.log(appsInfo)
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>Home</AppTitle>
      </HeaderContainer>
      <ContentContainer showsVerticalScrollIndicator={false}>
        <Button title="Helo" onPress={() => navigation.navigate("MiniApp")} />
        <Button title="MiniApp 2" />
      </ContentContainer>
    </ScreenContainer>
  )
}

export default Home
