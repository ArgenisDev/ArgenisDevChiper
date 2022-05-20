/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {asyncGetRPics} from '../../redux/thunks';
import {connect} from 'react-redux';
import {HomeProps, NavigationProps} from '../types';
import Header from '../../components/global/Header';
import Container from '../../components/global/Container';
import {COLORS} from '../../constants';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {normalize, SCREEN_WIDTH} from '../../hooks/useResponsive';
import WrapperList from '../../components/global/WrapperList';
import RenderItem from '../../components/home/RenderItem';
import filterByCategories from '../../helpers/filtersByCategorie';
interface HomeScreenProps {
  home: HomeProps;
  getRPics: () => void;
  navigation: NavigationProps;
}
const HomeScreen = ({home, getRPics, navigation}: HomeScreenProps) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'first', title: 'New'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Hot'},
    {key: 'fourth', title: 'Top'},
  ]);
  useEffect(() => {
    getRPics();
  }, []);

  const renderScene = SceneMap({
    first: () => null,
    second: () => null,
    third: () => null,
    fourth: () => null,
  });
  const changeRefresh = () => {
    setRefreshing(true);
    getRPics();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  const navigateToDescription = (link: string, title: string) => {
    console.log(link);
    navigation.navigate('DescriptionLink', {link: link, title: title});
  };
  return (
    <Container color={COLORS.background}>
      <Header title={'Reddit/r/programming'} isBack={false} />
      {refreshing && (
        <ActivityIndicator
          color={COLORS.primary}
          size="large"
          style={styles.activity}
        />
      )}
      {home.rpics.data.children?.length && (
        <WrapperList
          data={filterByCategories(index, home.rpics.data.children)}
          renderItem={({item}) => (
            <RenderItem action={navigateToDescription} item={item} />
          )}
          refreshing={refreshing}
          ListHeaderComponent={() => (
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
          )}
          onRefresh={changeRefresh}
        />
      )}
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
  activity: {
    marginTop: normalize(24),
  },
});
const mapStateToProps = (state: HomeScreenProps) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => ({
  getRPics: () => dispatch(asyncGetRPics()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
