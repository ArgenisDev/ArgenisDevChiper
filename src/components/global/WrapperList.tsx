import {FlatList, RefreshControl} from 'react-native';
import React from 'react';

const WrapperList = ({data, renderItem}) => {
  return (
    <FlatList
      data={data || []}
      renderItem={renderItem}
      keyExtractor={item => `${item?.data?.id}`}
      refreshControl={
        <RefreshControl
          colors={['#9Bd35A', '#689F38']}
          refreshing={false}
          onRefresh={e => console.log(e)}
        />
      }
    />
  );
};

export default WrapperList;
