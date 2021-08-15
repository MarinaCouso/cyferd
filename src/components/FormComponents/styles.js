import styled from "styled-components/native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export const InputContainer = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
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
  border: 1px solid grey;
  border-radius: ${hp(0.5)}px;
`

export const Label = styled.Text`
  color: black;
  font-family: Verdana;
  font-size: ${hp(2.5)}px;
  align-self: center;
`

export const CheckBoxContainerStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  width: wp(40),
  marginTop: hp(1.5),
  marginRight: wp(0),
  marginLeft: wp(0),
  marginBottom: wp(0),
  padding: 0,
}

export const LabelStyle = {
  fontFamily: "Verdana",
  fontSize: hp(2.5),
  fontWeight: 3,
  color: "black",
}

export const CheckboxIcon = styled.Image`
  width: 20px;
  height: 20px;
`
