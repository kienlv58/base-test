import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { MAIN_SCREEN2 } from 'constants/screens';

const HomeScreen = props => {
  const categories = [
    {
      name: 'cate1',
      icon: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg',
      onPress: () => {
        props.navigation.navigate(MAIN_SCREEN2);
      },
    },
    {
      name: 'cate2',
      icon: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg',
      onPress: () => {},
    },
    {
      name: 'cate3',
      icon: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg',
      onPress: () => {},
    },
    {
      name: 'cate4',
      icon: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg',
      onPress: () => {},
    },
  ];

  const renderItem = ({ item, index }) => {
    console.log('position', index);
    return (
      <TouchableOpacity
        onPress={item.onPress}
        style={{
          flexDirection: 'row',
          backgroundColor: index % 2 === 0 ? 'white' : 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <View>
          <Image source={{ uri: item.icon }} style={{ width: 50, height: 50 }} />
          <Text> {item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        onEndReached={() => {
          // load more here
        }}
        numColumns={3}
        onEndReachedThreshold={0.7}
        // ListFooterComponent={}
        data={categories}
        // onRefresh={() => this.onRefresh()}
        // refreshing={this.state.isRefreshing}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default HomeScreen;
