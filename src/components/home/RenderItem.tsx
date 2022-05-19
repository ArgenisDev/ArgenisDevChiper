import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants';
import getNumberOfLeters from '../../helpers/numberLetters';
import {normalize, SCREEN_WIDTH} from '../../hooks/useResponsive';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ChildrenProps} from '../../screens/types';

interface RenderItemProps {
  item: ChildrenProps;
}
const RenderItem = ({item}: RenderItemProps) => {
  return (
    <Container>
      <ImageLogo source={{uri: item.data.thumbnail}} resizeMode="cover" />
      <ContainerTitle>
        <Title color={COLORS.white}>{getNumberOfLeters(item.data.title)}</Title>
        <TextAuthor color={COLORS.white}>
          <Fontisto name={'person'} color={COLORS.primary} /> {item.data.author}
        </TextAuthor>
        <ContainerInteractions>
          <TextComment color={COLORS.white}>
            <Fontisto name={'like'} color={COLORS.primary} /> {item.data.score}
          </TextComment>
          <TextComment color={COLORS.white}>
            <Fontisto name={'comment'} color={COLORS.primary} />{' '}
            {item.data.num_comments}
          </TextComment>
        </ContainerInteractions>
      </ContainerTitle>
    </Container>
  );
};
const Container = styled.TouchableOpacity`
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
  width: 65%;
`;
const ContainerInteractions = styled.View`
  flex-direction: row;
  width: 75%;
  margin-left: ${normalize(16)}px;
  justify-content: space-between;
  margin-top: ${normalize(24)}px;
`;
const TextComment = styled.Text`
  color: ${({color}: {color: string}) => color};
  font-size: ${normalize(14)}px;
`;
const TextAuthor = styled.Text`
  color: ${({color}: {color: string}) => color};
  font-size: ${normalize(14)}px;
  margin-left: ${normalize(16)}px;
  margin-top: ${normalize(16)}px;
`;
export default RenderItem;
