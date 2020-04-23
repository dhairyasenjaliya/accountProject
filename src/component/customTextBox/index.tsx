import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import images from '../../assets/';

import styles from './styles';

const SearchData = (props: any) => {
  const {appTheme, data = '', placeholder} = props;
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        // placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        //  onChangeText = {this.handleEmail}
      />
    </View>
  );
};

const mapStateToProps = ({appTheme = ''}) => ({
  appTheme,
});

export default SearchData;
