import styled from "styled-components/native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  border: 1px solid white;
  border-radius: ${wp(2)}px;
  height: ${hp(35)}px;
  width: ${wp(30)}px;
  margin: ${hp(2)}px ${wp(1)}px;
`

export const CardImage = styled.Image`
  border-top-right-radius: ${wp(2)}px;
  border-top-left-radius: ${wp(2)}px;
  height: 50%;
  width: 100%;
`

export const CardContentContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom-right-radius: ${wp(2)}px;
  border-bottom-left-radius: ${wp(2)}px;
  background-color: blueviolet;
  padding: ${hp(2)}px ${wp(2)}px;
  height: 50%;
`
