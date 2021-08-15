import React, { useState, useEffect } from "react"
import { getObjectsData } from "../../services/dataService"

// Styles
import { HorizontalScrollView } from "./styles"

// Components
import Card from "../../components/Card"

const HorizontalScroll = () => {
  const [objectsInfo, setObjectsInfo] = useState([])

  const getObjectsDataFromService = async () => {
    const json = await getObjectsData()
    setObjectsInfo(json.data)
  }
  useEffect(() => {
    getObjectsDataFromService()
  }, [])

  return (
    <HorizontalScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {objectsInfo?.map((object) => (
        <Card object={object} />
      ))}
    </HorizontalScrollView>
  )
}

export default HorizontalScroll
