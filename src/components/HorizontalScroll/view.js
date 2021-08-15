import React, { useState, useEffect } from "react"
import { getObjectsData } from "../../services/dataService"

// Styles
import { HorizontalScrollView } from "./styles"

// Components
import Card from "../../components/Card"

const HorizontalScroll = ({ handleObject }) => {
  const [objectsInfo, setObjectsInfo] = useState([])

  const getObjectsDataFromService = async () => {
    const json = await getObjectsData()
    setObjectsInfo(json.data)
  }
  useEffect(() => {
    getObjectsDataFromService()
  }, [])

  const handleCard = (id) => {
    handleObject(id)
  }
  return (
    <HorizontalScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {objectsInfo?.map((object, key) => (
        <Card key={key} object={object} onPress={(id) => handleCard(id)} />
      ))}
    </HorizontalScrollView>
  )
}

export default HorizontalScroll
