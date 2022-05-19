import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants';
import getNumberOfLeters from '../../helpers/numberLetters';
import {normalize, SCREEN_WIDTH} from '../../hooks/useResponsive';
const RenderItem = ({item}) => {
  return (
    <Container>
      <ImageLogo source={{uri: item.data.thumbnail}} resizeMode="cover" />
      <ContainerTitle>
        <Title color={COLORS.white}>{getNumberOfLeters(item.data.title)}</Title>
      </ContainerTitle>
    </Container>
  );
};
const Container = styled.View`
  width: ${SCREEN_WIDTH * 0.9}px;
  height: ${normalize(150)}px;
  background-color: ${COLORS.hardBlueSecondary};
  margin-top: ${normalize(16)}px;
  margin-bottom: ${normalize(16)}px;
  border-radius: ${normalize(8)}px;
  align-self: center;
  flex-direction: row;
`;
const ImageLogo = styled.Image`
  width: 30%;
  height: 70%;
  margin-left: ${normalize(16)}px;
  margin-top: ${normalize(24)}px;
`;
const Title = styled.Text`
  color: ${({color}: {color: string}) => color};
  margin-top: ${normalize(24)}px;
  margin-left: ${normalize(16)}px;
`;
const ContainerTitle = styled.View`
  width: 60%;
`;
export default RenderItem;
