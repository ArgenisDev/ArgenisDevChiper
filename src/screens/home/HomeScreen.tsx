/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {asyncGetRPics} from '../../redux/thunks';
import {connect} from 'react-redux';
import {HomeProps} from '../types';
import Header from '../../components/global/Header';
import Container from '../../components/global/Container';
import {COLORS} from '../../constants';
import {Text, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {normalize, SCREEN_WIDTH} from '../../hooks/useResponsive';
import WrapperList from '../../components/global/WrapperList';
import RenderItem from '../../components/home/RenderItem';
interface HomeScreenProps {
  home: HomeProps;
  getRPics: () => void;
}
const HomeScreen = ({home, getRPics}: HomeScreenProps) => {
  useEffect(() => {
    getRPics();
  }, []);
  console.log('home', home);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Hot'},
    {key: 'fourth', title: 'Top'},
  ]);
  const FirstRoute = () => (
    <WrapperList data={home.rpics?.data?.children} renderItem={RenderItem} />
  );

  const SecondRoute = () => (
    <WrapperList data={home.rpics?.data?.children} renderItem={RenderItem} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: SecondRoute,
    fourth: SecondRoute,
  });
  return (
    <Container color={COLORS.background}>
      <Header title={'Reddit/r/programming'} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabStyle}
            renderLabel={({route, focused}) => (
              <Text
                style={
                  focused
                    ? styles.renderLabelTextFocused
                    : styles.renderLabelText
                }>
                {route.title}
              </Text>
            )}
          />
        )}
        initialLayout={{width: SCREEN_WIDTH}}
      />
    </Container>
  );
};
const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'transparent',
  },
  indicatorStyle: {backgroundColor: COLORS.primary},
  renderLabelText: {
    color: COLORS.greyOpacity,
    fontSize: normalize(14),
  },
  renderLabelTextFocused: {
    color: COLORS.white,
    fontSize: normalize(14),
  },
});
const mapStateToProps = (state: HomeScreenProps) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => ({
  getRPics: () => dispatch(asyncGetRPics()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
