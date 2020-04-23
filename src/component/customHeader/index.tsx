import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import images from '../../assets/';

import styles from './styles';

const CustomHeader = (props: any) => {
  const {appTheme, data = '', placeholder} = props;
  return (
    <View style={styles.searchSection}>
      {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        // onChangeText={(searchString) => {
        //   this.setState({searchString});
        // }}
        underlineColorAndroid="transparent"
      />
      <Image source={images.call} style={styles.searchIcon} />
    </View>
  );
};

export default CustomHeader;
