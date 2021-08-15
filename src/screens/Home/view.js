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

  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppTitle>Home</AppTitle>
      </HeaderContainer>
      <ContentContainer showsVerticalScrollIndicator={false}>
        {appsInfo?.apps?.map((app, key) => (
          <Button key={key} title={app.name} onPress={() => navigation.navigate("MiniApp", { appInfo: app })} />
        ))}
      </ContentContainer>
    </ScreenContainer>
  )
}

export default Home
