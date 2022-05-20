import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styled from 'styled-components/native';
import {COLORS} from '../../constants';
import {normalize} from '../../hooks/useResponsive';

interface HeaderProps {
  title: string;
  isBack?: boolean;
  action?: () => void;
}
const Header = ({title, isBack, action}: HeaderProps) => {
  return (
    <ContainerHeader>
      {isBack && (
        <Fontisto
          name={'arrow-left-l'}
          size={normalize(24)}
          color={COLORS.primary}
          onPress={action}
        />
      )}
      <Container color={COLORS.white}>{title}</Container>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  align-items: center;
`;
const Container = styled.Text`
  width: 80%;
  margin-left: ${normalize(24)}px;
  text-align: center;
  color: ${({color}: {color: string}) => color};
  margin-top: ${normalize(16)}px;
  font-size: ${normalize(18)}px;
  font-weight: 500;
  padding-bottom: ${normalize(16)}px;
`;
export default Header;
