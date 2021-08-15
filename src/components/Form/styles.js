import styled from "styled-components/native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export const ContentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  padding: ${hp(4)}px;
`

export const InputContainer = styled.View`
  min-width: 25%;
  max-width: 25%;
  margin: 0 ${wp(2)}px;
`
