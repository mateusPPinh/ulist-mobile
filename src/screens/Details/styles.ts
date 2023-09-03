import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #0D0E0E;
`;

export const Content = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-size: 32px;
  color: #fff;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: #f3f3f3;
  margin-top: 16px;
`;

export const InfoWrapper = styled.View`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Stars = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const InfoTitle = styled.Text`
  color: #f3f3f3;
  font-size: 16px;
  margin-left: 8px;
`;