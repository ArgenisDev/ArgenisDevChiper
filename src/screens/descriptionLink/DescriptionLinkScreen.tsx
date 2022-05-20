import React from 'react';
import WebView from 'react-native-webview';
import Container from '../../components/global/Container';
import Header from '../../components/global/Header';
import {COLORS} from '../../constants';
import getNumberOfLeters from '../../helpers/numberLetters';

interface DescriptionLinkScreenProps {
  route: {
    params: {
      link: string;
      title: string;
    };
  };
  navigation: any;
}

const DescriptionLinkScreen = ({
  route,
  navigation,
}: DescriptionLinkScreenProps) => {
  const {link, title} = route.params;
  const goBack = () => navigation.goBack();
  return (
    <Container color={COLORS.background}>
      <Header title={getNumberOfLeters(title)} isBack action={goBack} />
      <WebView source={{uri: `https://www.reddit.com${link}`}} />
    </Container>
  );
};

export default DescriptionLinkScreen;
