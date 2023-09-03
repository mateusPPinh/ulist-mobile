import styled from 'styled-components/native'
import { IButtonProps } from '.';

export const ButtonComponent = styled.TouchableOpacity<Pick<IButtonProps, 'variant'>>`
  background-color: #0D0E0E;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #fff;
`;

export const ButtonTitle = styled.Text`
  color: #F1FFFA;
`;