import React from './node_modules/react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from './node_modules/react-native';
import images from '../../assets';

import styles from './styles';

const SearchData = (props: any) => {
  const {
    appTheme,
    data = '',
    placeholder,
    icon,
    backGroundColor,
    border = '',
  } = props;
  return (
    <View
      style={[
        styles.searchSection,
        {backgroundColor: backGroundColor ? backGroundColor : '#f4f5f5'},
        border && {borderWidth: 2, borderColor: '#76ccf3'},
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
      {icon === 'search' && (
        <Image source={images.search} style={styles.searchIcon} />
      )}

      {icon === 'close' && <Image source={images.close} style={styles.close} />}
      {icon === 'down' && <Image source={images.down} style={styles.down} />}
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
