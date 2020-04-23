import React, {useState} from 'react';
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
  TouchableOpacity,
} from 'react-native';
import SearchData from '../../component/customTextBox';
import {scale} from '../../utils/scale';
import images from '../../assets/';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

interface IProps {
  appTheme: Object;
}
interface IState {}

class DetailScreen extends React.Component<IProps, IState> {
  state: {};
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date('2020-06-12T14:42:42'),
      mode: 'date',
      show: false,
      meetAgent: false,
      showDate: false,
      showTime: false,
    };
  }

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = (mode) => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };

  showTimeHolder = (time) => {
    return (
      <View style={[styles.searchSection]}>
        {/* <View style={styles.input} /> */}
        <Text style={styles.timeTExt}> {time}</Text>
      </View>
    );
  };

  render() {
    const {show, date, mode} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          paddingBottom: scale(50),
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Project')}>
          <Image style={styles.header} source={images.header} />
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleText}>Company:*</Text>
            <SearchData placeholder="Crystal Net pte ltd" icon={'search'} />
            <Text style={styles.titleText}>
              Select Company Name or Contract Name :*
            </Text>
            <SearchData
              icon={'close'}
              placeholder={'One Young Quan Derick(Fith Avenbe C........'}
              border={true}
            />

            <Text style={styles.titleText}>Select Conversation:*</Text>
            <SearchData icon={'search'} placeholder={'General Conversation'} />

            <Text style={styles.titleText}>Appointment Date :*</Text>
            <TouchableOpacity
              onPress={() =>
                Platform.OS === 'ios'
                  ? this.setState({
                      showDate: !this.state.showDate,
                    })
                  : this.datepicker()
              }>
              {this.showTimeHolder('14-02-2020')}
            </TouchableOpacity>

            <View>
              {this.state.showDate && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  // is24Hour={true}
                  display="default"
                  onChange={this.setDate}
                />
              )}
            </View>

            <Text style={styles.titleText}>Meeting Type:*</Text>
            <SearchData
              icon={'search'}
              placeholder={'1st intro Meeting (Linkdin/Networking)'}
            />
            <Text style={styles.titleText}>Appointment Start Time :*</Text>
            <TouchableOpacity
              onPress={() =>
                Platform.OS === 'ios'
                  ? this.setState({
                      showTime: !this.state.showTime,
                    })
                  : this.timepicker()
              }>
              {this.showTimeHolder('10:30 AM')}
            </TouchableOpacity>

            {/* <SearchData icon={'close'} placeholder="10:30 AM" /> */}
            <Text style={styles.titleText}>End Time:*</Text>
            <TouchableOpacity
              onPress={() =>
                Platform.OS === 'ios'
                  ? this.setState({
                      showTime: !this.state.showTime,
                    })
                  : this.timepicker()
              }>
              {this.showTimeHolder('11:30 AM')}
            </TouchableOpacity>

            <View>
              {this.state.showTime && (
                <DateTimePicker
                  value={date}
                  mode={'time'}
                  is24Hour={true}
                  display="default"
                  onChange={this.setDate}
                />
              )}
            </View>

            <View>
              {this.state.show && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={this.setDate}
                />
              )}
            </View>

            <Text style={styles.titleText}>Meet Agent:*</Text>

            {/* <SearchData icon={'search'} /> */}
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  meetAgent: !this.state.meetAgent,
                });
              }}>
              <Image
                source={images.searchCom}
                style={{
                  resizeMode: 'contain',
                  width: '90%',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>

            {this.state.meetAgent && (
              <View
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 30,
                  marginHorizontal: 20,
                  paddinVertical: 20,
                  marginBottom: 120,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }}>
                <SearchData icon={'search'} placeholder={'Search'} />
                <Text style={styles.lastName}>Alston</Text>
                <View style={styles.carltext}>
                  <Text style={[styles.lastName, {color: '#FFF'}]}>Carl</Text>
                </View>

                <Text style={styles.lastName}>Chris Playford</Text>
                <Text style={styles.lastName}>Ciara</Text>
                <Text style={styles.lastName}>Danial Carrad</Text>
                <Text style={styles.lastName}>Eunice Uh</Text>
              </View>
            )}
          </View>
          <View style={{marginVertical: 200}} />
        </ScrollView>
        <Image style={styles.tabBar} source={images.tab2} />
      </SafeAreaView>
    );
  }
}

export default DetailScreen;
