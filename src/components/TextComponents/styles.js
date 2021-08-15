import styled from "styled-components/native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export const AppTitle = styled.Text`
  color: blueviolet;
  font-family: Verdana;
  font-size: ${hp(4)}px;
  align-self: center;
  margin: ${hp(2)}px 0 ${hp(2)}px 0;
`

export const MenuItemTitle = styled.Text`
  color: black;
  font-family: Verdana;
  font-size: ${hp(2)}px;
`

export const CardTitleText = styled.Text`
  color: white;
  font-family: Verdana;
  font-size: ${hp(2)}px;
  font-weight: bold;
  text-overflow: clip;
  width: 100%;
`

export const CardCategoryText = styled.Text`
  text-transform: uppercase;
  font-size: ${hp(1.5)}px;
  color: white;
  font-family: Verdana;
  margin-bottom: ${hp(1)}px;
`

export const CardContentText = styled(CardTitleText)`
  align-self: left;
  text-overflow: fade;
  overflow: hidden;
  font-weight: regular;
  font-size: ${hp(1.5)}px;
  width: 100%;
  padding-top: ${hp(1)}px;
`
