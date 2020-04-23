import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listCategory: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  categoryText: {
    padding: scale(15),
    backgroundColor: 'red',
    marginHorizontal: scale(10),
    borderRadius: scale(50),
  },
  categoryTextTimeColor: {
    color: '#f34894',
    textAlign: 'right',
    fontWeight: '400',
  },
  flatlistStyleData: {
    backgroundColor: '#FFF',
    marginHorizontal: scale(20),
    marginVertical: scale(10),
    borderRadius: scale(5),
    padding: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlistData: {
    width: '20%',
  },
  timeText: {
    textAlign: 'right',
  },
  detailListIcon: {
    height: scale(30),
    width: scale(30),
  },
});

export default styles;
