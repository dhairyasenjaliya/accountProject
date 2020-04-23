import {StyleSheet} from 'react-native';
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
    backgroundColor: '#fff',
    marginHorizontal: scale(20),
    borderRadius: scale(100),
    // paddingVertical: scale(15),
    marginVertical: scale(10),
  },
  searchIcon: {
    // padding: 10,
    height: scale(25),
    width: scale(25),
    marginHorizontal: scale(10),
    // weight: scale(15),
  },
  input: {
    flex: 1,
    paddingTop: scale(15),
    paddingRight: scale(15),
    paddingBottom: scale(15),
    paddingLeft: 0,
    // backgroundColor: 'red',
    color: '#424242',
    marginLeft: scale(20),
  },
});
