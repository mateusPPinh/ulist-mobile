import styled from 'styled-components/native'
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #0D0E0E;
`;

export const Content = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 56px;
`;

export const Title = styled.Text`
  color: #F1FFFA;
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: 16px;
`;

export const ContainerTitle = styled.Text`
  font-size: 21px;
  color: #fff;
  font-weight: bold;
`;

export const Thumbnail = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;