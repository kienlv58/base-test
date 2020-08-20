import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import { MAIN_SCREEN } from 'constants/screens';
import strings from 'locale';
import useSession from 'hooks/useSession';
import styles from './styles';
import OptiosnMenu from './OptionsMenu';

const MainScreen = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const { token } = useSession();

  const renderItem = ({ item, index }) => {
    console.log('position', index);
    return (
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: index % 2 === 0 ? 'white' : 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <View style={{ flex: 1 }}>
          <Text>Họ tên: Lò Văn Kiên</Text>
          <Text>SDT: 0890484032</Text>
          <Text>Chuyên Khoa: Khám nội</Text>
          <Text>Ngày khám: 9:00 21/08/2020</Text>
        </View>
        <View
          style={{
            // width: 100,
            backgroundColor: index % 2 === 0 ? 'green' : 'yellow',
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text>{index % 2 === 0 ? 'Đã hẹn' : 'Chưa hẹn'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FlatList
        onEndReached={() => {
          //load more here
        }}
        onEndReachedThreshold={0.7}
        // ListFooterComponent={}
        data={[1, 2, 3, 4]}
        // onRefresh={() => this.onRefresh()}
        // refreshing={this.state.isRefreshing}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <OptiosnMenu modalVisible={showModal} hideModal={() => setShowModal(false)} />
      {/*<Text>Hey{` ${token}` || ''}, you&#39;re logged in!</Text>*/}
      {/*<Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} />*/}
    </View>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
