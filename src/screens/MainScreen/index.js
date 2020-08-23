import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import { MAIN_SCREEN } from 'constants/screens';
import strings from 'locale';
import useSession from 'hooks/useSession';
import styles from './styles';
import OptiosnMenu from './OptionsMenu';
import httpClient from 'httpClient';

const MainScreen = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const { token } = useSession();

  const callApi = async () => {
    try {
      const { data } = await httpClient.post(
        '/kb/dangkyonline/get-list',
        {},
        {
          headers: {
            'x-access-permission': `{ code: 'KB_DangKyKham', action: '_view' }`,
            'x-access-token':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWRfY2FuYm8iOjEsImlkX2RvbnZpcyI6IjUzLDMsMjYsNDksNDYsNDMsNDEsNDAsNTIsNDIsNCw1NSwzNiwzMSwyNCw1MSwxMCwzMiwyMywyOSwyMSwyMiwyNSwyNywzMCwzNCwzMyw2LDgsOSw2Miw1Niw0NCw0NywxLDUsMjgsMzUsNyw1MCwxOSwxNSwxMSw0OCwxNiwxNCwxMywxMiwxOCwzOCwyMCwxNywzOSw1Nyw1OCw1NCw1OSw2MCwzNyw0NSw2Nyw2NCw2Niw2NSw2MyIsInJvbGVMZXZlbCI6bnVsbCwiY3VzdG9tZXJJZCI6MSwiaWRfZG9udmkiOjQwLCJpYXQiOjE1OTc5NDA5MTcsImV4cCI6MTYwMDUzMjkxN30.hL7w3m0XoGL-SPYFfxCWJuN44go03qHq0WZ5FIBr0y8',
          },
        },
      );

      console.log('data', data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log('call api');
    callApi();
  }, []);

  const renderItem = ({ item, index }) => {
    // console.log('position', index);
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
          // load more here
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
      <Text>Hey{` ${token}` || ''}, you&#39;re logged in!</Text>
      <Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} />
    </View>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
