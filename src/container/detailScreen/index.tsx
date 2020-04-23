import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Linking,
  Image,
  Platform,
} from 'react-native';
import SearchData from '../../component/customTextBox';
import {scale} from '../../utils/scale';
import images from '../../assets/';

interface IProps {
  appTheme: Object;
}
interface IState {}

class DetailScreen extends React.Component<IProps, IState> {
  state: {};
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <Image style={styles.header} source={images.header} />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleText}>Company:*</Text>
            <SearchData placeholder="Crystal Net pte ltd" icon={'search'} />
            <Text style={styles.titleText}>
              Select Company Name or Contract Name :*
            </Text>
            <SearchData icon={'close'} />
            <Text style={styles.titleText}>Select Conversation:*</Text>
            <SearchData icon={'search'} />
            <Text style={styles.titleText}>Appointment Start Time :*</Text>
            <SearchData icon={'close'} />
            <Text style={styles.titleText}>End Time:*</Text>
            <SearchData placeholder="Crystal Net" icon={'search'} />
            <Text style={styles.titleText}>Meet Agent:*</Text>
            <SearchData icon={'search'} />
            <Text style={styles.titleText}>Company:*</Text>
            <SearchData icon={'search'} />
          </View>
        </ScrollView>
        <Image style={styles.tabBar} source={images.tab2} />
      </SafeAreaView>
    );
  }
}

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
});

export default DetailScreen;
