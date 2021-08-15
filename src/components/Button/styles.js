import styled from "styled-components/native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export const Container = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: ${hp(1)}px;
  background-color: blueviolet;
  max-width: ${hp(20)}px;
  min-height: ${hp(8)}px;
  border-radius: ${hp(10)}px;
  margin: 0 ${wp(2)}px;
`

export const ButtonText = styled.Text`
  color: white;
  font-family: Verdana;
  font-size: ${hp(2.5)}px;
  align-self: center;
`
