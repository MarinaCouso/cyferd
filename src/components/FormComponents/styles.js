import styled from "styled-components/native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export const InputContainer = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: ${hp(1)}px;
  min-width: 25%;
  max-width: 25%;
  margin: 0 ${wp(2)}px;
`

export const TextInput = styled.TextInput`
  color: black;
  font-family: Verdana;
  font-size: ${hp(2.5)}px;
  align-self: center;
  width: 100%;
  border: 1px solid blue;
  border-radius: ${hp(2.5)}px;
`

export const Label = styled.Text`
  color: black;
  font-family: Verdana;
  font-size: ${hp(2.5)}px;
  align-self: center;
`
