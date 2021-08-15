import styled from "styled-components/native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

export const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: ${hp(4)}px;
`

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
`

export const ContentContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: hp(5),
  },
})``

export const AppTitle = styled.Text`
  color: blueviolet;
  font-family: Verdana;
  font-size: ${hp(4)}px;
  align-self: center;
  margin: ${hp(2)}px 0 ${hp(2)}px 0;
`
