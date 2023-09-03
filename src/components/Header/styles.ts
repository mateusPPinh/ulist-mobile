import styled from 'styled-components/native'
import { StatusBar } from 'react-native';

export const Container = styled.View`
  background-color: #0D0E0E;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 100px;
`;

export const Content = styled.View`
 align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#F1FFFA'
})`
  border-color: #fff;
  background-color: #0D0E0E;
  border-width: 1px;
  color: #fff;
  width: 145px;
  font-size: 12px;
  padding-left: 10px;
  border-radius: 4px;
  height: 32px;
`;