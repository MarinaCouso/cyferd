import React from 'react';
import { MenuItemTitle, AppTitle, CardTitleText, CardCategoryText, CardContentText } from './styles';

const ScreenTitle = ({ text }) => {
  return <AppTitle>{text}</AppTitle>;
};

const MenuTitle = ({ text }) => {
  return <MenuItemTitle>{text}</MenuItemTitle>;
};

const CardTitle = ({ text }) => {
  return <CardTitleText>{text}</CardTitleText>;
};

const CardCategory = ({ text }) => {
  return <CardCategoryText>{text}</CardCategoryText>;
};

const CardContent = ({ text }) => {
  return <CardContentText>{text}</CardContentText>;
};

export { ScreenTitle, MenuTitle, CardTitle, CardCategory, CardContent };
