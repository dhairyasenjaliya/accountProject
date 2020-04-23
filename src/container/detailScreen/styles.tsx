import {StyleSheet, Platform} from 'react-native';
import {scale} from '../../utils/scale';

const styles = StyleSheet.create({
  activityIndicator: {marginTop: 100},
  container: {
    marginVertical: scale(10),
  },
  detailContainer: {
    // flex: 1,
    padding: scale(10),
    marginVertical: scale(10),
    marginHorizontal: scale(10),
    borderRadius: scale(10),
  },
  textColor: {
    color: '#FFF',
    fontSize: scale(18),
    marginVertical: scale(10),
  },
  flexRow: {
    flexDirection: 'row',
  },
  titleText: {
    marginHorizontal: scale(20),
    fontSize: scale(16),
    // font-family:'Helvut neo'
  },
  tabBar: {
    position: 'absolute',
    resizeMode: 'contain',
    width: '100%',
    bottom: scale(Platform.OS === 'ios' ? -50 : -75),
  },
  header: {
    // position: 'absolute',
    resizeMode: 'contain',
    width: '100%',
    marginTop: scale(Platform.OS === 'ios' ? -30 : -40),
    // backgroundColor: 'red',
    // top: scale(5),
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f5',
    marginHorizontal: scale(20),
    borderRadius: scale(100),
    // paddingVertical: scale(15),
    marginVertical: scale(10),
    paddingTop: scale(15),
    paddingRight: scale(15),
    paddingBottom: scale(15),
  },
  timeTExt: {
    marginHorizontal: scale(20),
  },
  lastName: {
    marginVertical: scale(10),
    marginHorizontal: scale(20),
  },
  carltext: {
    backgroundColor: '#76ccf3',
    borderRadius: 20,
    marginHorizontal: scale(10),
  },
});

export default styles;
