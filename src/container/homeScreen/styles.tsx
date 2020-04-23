import {StyleSheet, Platform} from 'react-native';
import {scale} from '../../utils/scale';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listCategory: {
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: scale(10),
    justifyContent: 'center',
  },
  searchFlex: {
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: scale(10),
    justifyContent: 'center',
  },
  leadText: {
    marginVertical: scale(25),
    fontSize: scale(14),
  },
  categoryText: {
    padding: scale(15),
    width: scale(90),
    borderRadius: scale(22),
    overflow: 'hidden',
    marginRight: scale(5),
    textAlign: 'center',
    backgroundColor: '#76ccf3',
    color: '#FFF',
  },
  categoryTextLeads: {
    padding: scale(15),
    width: scale(90),
    borderRadius: scale(22),
    overflow: 'hidden',
    marginRight: scale(5),
    textAlign: 'center',
    backgroundColor: '#76c67b',
    color: '#FFF',
  },
  categoryTextAll: {
    padding: scale(15),
    backgroundColor: '#76ccf3',
    color: '#FFF',
    width: scale(70),
    borderRadius: scale(22),
    overflow: 'hidden',
    marginRight: scale(5),
    textAlign: 'center',
  },
  categoryTextTimeColor: {
    color: '#f34894',
    textAlign: 'right',
    fontWeight: '400',
  },
  flatlistStyleData: {
    backgroundColor: '#FFF',
    marginHorizontal: scale(20),
    marginVertical: scale(8),
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
  threeIcon: {
    height: scale(35),
    width: scale(35),
    marginHorizontal: scale(5),
  },
  threeIcon2: {
    height: scale(35),
    width: scale(50),
    resizeMode: 'stretch',
    marginRight: scale(5),
  },
  dataTimeContainFlex: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: scale(15),
    borderRadius: scale(8),
  },
  tabBar: {
    position: 'absolute',
    resizeMode: 'contain',
    width: '100%',
    bottom: scale(Platform.OS === 'ios' ? -50 : -40),
  },
  header: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: scale(Platform.OS === 'ios' ? -30 : -40),
  },
  dataTimeContain: {
    padding: scale(20),
    backgroundColor: '#FFF',
    borderRadius: scale(8),
  },
  leftContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
  },
  searchContain: {
    backgroundColor: '#FFF',
    paddingVertical: scale(20),
  },
  typeText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
  },
  typeText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(30),
    marginTop: scale(20),
  },
  doneIcon: {
    height: scale(20),
    width: scale(20),
    marginHorizontal: scale(10),
  },
  doneContainer: {flexDirection: 'row', justifyContent: 'center'},
  doneText: {marginHorizontal: scale(5), marginVertical: scale(2)},
});

export default styles;
