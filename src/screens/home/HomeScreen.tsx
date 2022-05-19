/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {asyncGetRPics} from '../../redux/thunks';
import {connect} from 'react-redux';
import {HomeProps} from '../types';

interface HomeScreenProps {
  home: HomeProps;
  getRPics: () => void;
}
const HomeScreen = ({home, getRPics}: HomeScreenProps) => {
  useEffect(() => {
    getRPics();
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
const mapStateToProps = (state: HomeScreenProps) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => ({
  getRPics: () => dispatch(asyncGetRPics()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
