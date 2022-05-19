import {FlatList, ListRenderItem, RefreshControl} from 'react-native';
import React from 'react';
import {ChildrenProps} from '../../screens/types';

interface WrapperListProps {
  data: ChildrenProps[] | undefined;
  renderItem: ListRenderItem<ChildrenProps>;
  refreshing: boolean;
  onRefresh: () => void;
  ListHeaderComponent: ListRenderItem<ChildrenProps>;
}
const WrapperList = ({
  data,
  renderItem,
  refreshing,
  onRefresh,
  ListHeaderComponent,
}: WrapperListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={item => `${item?.data?.id}`}
      refreshControl={
        <RefreshControl refreshing={!!refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default WrapperList;
