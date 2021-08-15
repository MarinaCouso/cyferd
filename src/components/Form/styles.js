import styled from "styled-components/native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export const ContentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: ${hp(4)}px;
  width: 100%;
  height: ${hp(100)}px;
`

export const InputContainer = styled.View`
  width: 100%;
  height: 10%;
  margin: 0 ${wp(2)}px;
`

export const ScrollContainer = styled.View`
  width: 100%;
  height: auto;
  margin: 0 ${wp(2)}px;
  overflow: hidden;
`
