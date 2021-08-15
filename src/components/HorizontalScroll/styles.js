import styled from "styled-components/native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

export const HorizontalScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})`
  margin-bottom: ${hp(1.5)}px;
`
