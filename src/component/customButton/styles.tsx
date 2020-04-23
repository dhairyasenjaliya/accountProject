import {StyleSheet, Platform} from 'react-native';
import {scale} from '../../utils/scale';

export default StyleSheet.create({
  textInput: {
    backgroundColor: '#FFF',
    marginHorizontal: scale(20),
    borderRadius: scale(20),
    paddingVertical: scale(15),
    marginVertical: scale(20),
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f5',
    marginHorizontal: scale(20),
    borderRadius: scale(100),
    // paddingVertical: scale(Platform.OS === 'ios' ? 0 : 0),
    marginVertical: scale(10),
  },
  searchIcon: {
    // padding: 10,
    height: scale(20),
    width: scale(20),
    marginHorizontal: scale(15),
    // weight: scale(15),
  },
  close: {
    height: scale(15),
    width: scale(15),
    marginHorizontal: scale(15),
    tintColor: '#76ccf3',
  },
  down: {
    height: scale(15),
    width: scale(15),
    marginHorizontal: scale(15),
    tintColor: 'black',
  },
  input: {
    flex: 1,
    paddingTop: scale(15),
    paddingRight: scale(15),
    paddingBottom: scale(15),
    // paddingVertical: scale(Platform.OS === 'ios' ? 15 : 0),
    paddingLeft: 0,
    // backgroundColor: 'red',
    color: '#424242',
    marginLeft: scale(20),
  },
});
