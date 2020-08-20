import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const OptiosnMenu = props => {
  return (
    <Modal
      hasBackdrop
      visible={props.modalVisible}
      backdropOpacity={0.5}
      deviceHeight={Dimensions.get('screen').height}
      deviceWidth={Dimensions.get('screen').width}>
      <View
        style={{
          width: '80%',
          padding: 20,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => props.hideModal()}>
          <Text>chi tiet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.hideModal()}>
          <Text>sua</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default OptiosnMenu;
