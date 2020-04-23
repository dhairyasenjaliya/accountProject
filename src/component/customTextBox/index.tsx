import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import images from '../../assets/';

import styles from './styles';

const SearchData = (props: any) => {
  const {appTheme, data = '', placeholder, icon, backGroundColor} = props;
  return (
    <View
      style={[
        styles.searchSection,
        {backgroundColor: backGroundColor ? backGroundColor : '#f4f5f5'},
      ]}>
      {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        // onChangeText={(searchString) => {
        //   this.setState({searchString});
        // }}
        underlineColorAndroid="transparent"
      />
      <Image
        source={icon === 'search' ? images.search : images.close}
        style={styles.searchIcon}
      />
    </View>
  );
};

// <View>
{
  /* <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        // placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        //  onChangeText = {this.handleEmail}
      />
    </View> */
}

export default SearchData;
