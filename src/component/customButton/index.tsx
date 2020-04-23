import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import images from '../../assets';

import styles from './styles';

const CustomButton = (props: any) => {
  const {
    appTheme,
    data = '',
    placeholder,
    icon,
    backGroundColor,
    border = '',
    onPress = '',
    color = '',
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => {}}
      style={[
        styles.searchSection,
        {backgroundColor: backGroundColor ? backGroundColor : '#f4f5f5'},
        border && {borderWidth: 2, borderColor: '#76ccf3'},
      ]}>
      {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}

      <View style={styles.input} underlineColorAndroid="transparent">
        <Text style={color && {color: color}}>{placeholder}</Text>
      </View>
      {icon === 'search' && (
        <Image source={images.search} style={styles.searchIcon} />
      )}

      {icon === 'close' && <Image source={images.close} style={styles.close} />}
      {icon === 'down' && <Image source={images.down} style={styles.down} />}
    </TouchableOpacity>
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

export default CustomButton;
