import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import SearchData from '../../component/customTextBox';

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
      <SafeAreaView>
        <ScrollView>
          <Text>Company:*</Text>
          <SearchData placeholder="Crystal Net pte ltd" />
          <Text>Select Company Name or Contract Name :*</Text>
          <SearchData />
          <Text>Select Conversation:*</Text>
          <SearchData />
          <Text>Appointment Start Time :*</Text>
          <SearchData />
          <Text>End Time:*</Text>
          <SearchData placeholder="Crystal Net" />
          <Text>Meet Agent:*</Text>
          <SearchData />
          <Text>Company:*</Text>
          <SearchData />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {marginTop: 100},
  detailContainer: {
    // flex: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textColor: {
    color: '#FFF',
    fontSize: 18,
    marginVertical: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
