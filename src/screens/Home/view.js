import React, { useState, useEffect } from "react"
import { ScreenContainer, ContentContainer, HeaderContainer } from "./styles"
import Button from "../../components/Button/view"
import { getAppsInfo } from "../../services/dataService"
import { AppTitle } from "../../components/TextComponents/styles"

const Home = ({ navigation }) => {
  const [appsInfo, setAppsInfo] = useState([])

  const getAppsInfoFromService = async () => {
    const json = await getAppsInfo()
    setAppsInfo(json)
  }

  useEffect(() => {
    getAppsInfoFromService()
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
