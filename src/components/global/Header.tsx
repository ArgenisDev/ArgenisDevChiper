import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants';
import {normalize} from '../../hooks/useResponsive';

interface HeaderProps {
  title: string;
}
const Header = ({title}: HeaderProps) => {
  return <Container color={COLORS.white}>{title}</Container>;
};

const Container = styled.Text`
  width: 100%;
  text-align: center;
  color: ${({color}: {color: string}) => color};
  margin-top: ${normalize(16)}px;
  font-size: ${normalize(18)}px;
  font-weight: 500;
  padding-bottom: ${normalize(16)}px;
`;
export default Header;
