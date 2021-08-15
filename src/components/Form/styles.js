import styled from "styled-components/native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

export const ContentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  padding: ${hp(4)}px;
`
