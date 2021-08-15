import React from "react"

// Styles
import { HorizontalScrollView } from "./styles"

// Components
import Card from "../../components/Card"

const HorizontalScroll = () => {
  return (
    <HorizontalScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Card />
    </HorizontalScrollView>
  )
}

export default HorizontalScroll
