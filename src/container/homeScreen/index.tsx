import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Select,
  Platform,
} from 'react-native';
import styles from './styles';
// import DropdownMenu from 'react-native-dropdown-menu';
import images from '../../assets/';
import SearchData from '../../component/customTextBox';
import CustomButton from '../../component/customButton';

import {Switch} from 'react-native-switch';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import {scale} from '../../utils/scale';

interface IProps {
  appTheme: Object;
}
interface IState {}

const multiData = [
  {
    name: 'jacky cheng Mike Test Test Sub Name Name 2',
    desc: 'Gmi Technologies pvt.ltd',
    date: '29/12/19',
    time: '2 PM',
    logo: '22222222',
  },
  {
    name: 'jacky cheng',
    desc: 'Gmi Technologies pvt.ltd',
    date: '29/12/19',
    time: '2 PM',
    logo: '22222222',
  },
  {
    name: 'jacky cheng',
    desc: 'Gmi Technologies pvt.ltd',
    date: '29/12/19',
    time: '2 PM',
    logo: '22222222',
  },
  {
    name: 'jacky cheng',
    desc: 'Gmi Technologies pvt.ltd',
    date: 'Today',
    time: '2 PM',
    logo: '22222222',
  },
  {
    name: 'satish george',
    desc: 'In Corp Global Pte Lte',
    date: 'Today',
    time: '2 PM',
    logo: '22222222',
  },
  {
    name: 'Sherene Lua',
    desc: 'Unicorn Financial Solution LTD',
    date: '29/12/19',
    time: '2 PM',
    logo: '22222222',
  },
];

const singleData = [
  {
    name: 'Hoang(Harry)Tran ',
    desc: 'SIR',
    date: '29/12/19',
    time: '2 PM',
    logo: '22222222',
  },
];

const date2 = '29/12/2018';
const time = '02:00pm';
class HomeScreen extends React.Component<IProps, IState> {
  state: {};
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      selectedVal: true,
      date: new Date('2020-06-12T14:42:42'),
      mode: 'date',
      show: false,
      showCompany: false,
    };
  }

  componentDidMount() {}
  // Name of project, Name of company,   and techstack.

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

  detailList = (data) => {
    const {name, desc, date, logo, time} = data.item;
    return (
      <View style={styles.flatlistStyleData}>
        <Text style={styles.flatlistData}>{name}</Text>
        <Text style={styles.flatlistData}>{desc}</Text>
        <Image style={styles.detailListIcon} source={images.call} />
        <Image style={styles.detailListIcon} source={images.message} />

        <View style={styles.flatlistData}>
          <Text style={styles.categoryTextTimeColor}>{date}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
    );
  };

  customThemeIcon = () => {
    const {selectedVal} = this.state;
    return (
      <View>
        <Text style={{color: '#76ccf3', fontSize: 16, fontWeigth: 'bold'}}>
          {selectedVal ? `Follow-Ups` : 'Lead List'}
        </Text>
      </View>
    );
  };

  render() {
    // var data = [['Company', 'Helll0', 'check']];
    const {show, date, mode, showCompany} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.searchContain}>
            {/* <Image source={images.background} /> */}
            <ImageBackground
              source={images.background}
              style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                paddingTop: 20,
              }}>
              <View style={{marginTop: 25}}>
                <CustomButton
                  placeholder="Company"
                  icon={'down'}
                  backGroundColor={'#35e7bd'}
                  color={'#FFF'}
                  onPress={() => {
                    this.setState({showCompany: !showCompany});
                  }}
                />
              </View>

              {showCompany && (
                <View>
                  <View style={styles.viewCustom}>
                    <Text style={{textAlign: 'center', marginVertical: 20}}>
                      Company 1
                    </Text>
                  </View>

                  <View style={styles.viewCustom2}>
                    <Text style={{textAlign: 'center', marginVertical: 20}}>
                      Company 2
                    </Text>
                  </View>

                  <View style={styles.viewCustom2}>
                    <Text style={{textAlign: 'center', marginVertical: 20}}>
                      Company 3
                    </Text>
                  </View>
                </View>
              )}
              <CustomButton
                placeholder="Select User Clients List"
                icon={'down'}
                backGroundColor={'#FFF'}
              />
              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <CustomButton
                  placeholder="Status"
                  icon={'down'}
                  backGroundColor={'#FFF'}
                  // backGroundColor={'#35e7bd'}
                />
                <CustomButton
                  placeholder="Product"
                  icon={'down'}
                  backGroundColor={'#FFF'}
                />
              </View>
            </ImageBackground>
            <View style={styles.listCategory}>
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text style={styles.categoryTextAll}>All</Text>
              </TouchableOpacity>
              <Text style={styles.categoryText}>Prospects</Text>
              <Text style={styles.categoryText}>Clients</Text>
              <Text style={styles.categoryTextLeads}>Leads</Text>
            </View>
            <SearchData placeholder="Search" icon={'search'} />
            <View style={styles.searchFlex}>
              <Text style={styles.leadText}>Lead Group:</Text>
              <View style={{height: '80%', flex: 1}}>
                <SearchData
                  placeholder="(Old) Maid Agency (Less Than ..."
                  icon={'search'}
                />
              </View>
            </View>

            <View style={{marginHorizontal: 15, marginBottom: 30}}>
              <Switch
                value={this.state.selectedVal}
                onValueChange={(value) => this.setState({selectedVal: value})}
                disabled={false}
                circleSize={190}
                barHeight={55}
                circleBorderWidth={0}
                backgroundActive="#76ccf3"
                backgroundInactive="#76ccf3"
                circleActiveColor="#FFF"
                changeValueImmediately={true}
                renderInsideCircle={() => this.customThemeIcon()}
                innerCircleStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 170,
                  marginLeft: scale(Platform === 'ios' ? 80 : 60),
                }}
                outerCircleStyle={{}} // style for outer animated circle
                renderActiveText={true}
                renderInActiveText={true}
                // activeText={'Lead List'}
                // activeTextStyle={{marginLeft: scale(20)}}
                inActiveText={'                   Follow-Ups'}
                // inActiveTextStyle={{marginRight: scale(-50)}}
                // switchLeftPx={5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                // switchRightPx={5}
              />
            </View>

            <View style={styles.typeText}>
              <View style={styles.doneContainer}>
                <Image style={styles.doneIcon} source={images.done} />
                <Text style={styles.dontText}>Prospects</Text>
              </View>
              <View style={styles.doneContainer}>
                <Image style={styles.doneIcon} source={images.done} />
                <Text style={styles.dontText}>Client</Text>
              </View>
              <View style={styles.doneContainer}>
                <Image style={styles.doneIcon} source={images.done} />
                <Text style={styles.dontText}>Leads</Text>
              </View>
            </View>

            <View style={styles.typeText2}>
              <Text>Name</Text>
              <Text>Company</Text>
              <Text>Contacts</Text>
              <Text>Date & Time</Text>
            </View>
          </View>

          <View>
            <FlatList
              data={singleData}
              renderItem={(data) => this.detailList(data)}
            />
          </View>
          <View style={styles.leftContain}>
            <View style={styles.dataTimeContain}>
              <Text style={styles.categoryTextTimeColor}>{date2}</Text>
              <Text>{time}</Text>
            </View>
            <View style={styles.dataTimeContainFlex}>
              <Image style={styles.threeIcon2} source={images.potentail} />
              <TouchableOpacity
                onPress={() =>
                  this.datepicker && this.setState({show: !this.state.show})
                }>
                <Image style={styles.threeIcon} source={images.calender} />
              </TouchableOpacity>
              <Image style={styles.threeIcon} source={images.callBack} />
              <Image style={styles.threeIcon} source={images.dollar} />
            </View>
          </View>
          <View>
            {show && (
              <DateTimePicker
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={this.setDate}
              />
            )}
          </View>
          <View>
            <FlatList
              data={multiData}
              renderItem={(data) => this.detailList(data)}
              contentContainerStyle={{paddingBottom: 90}}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={1}
          // style={{flex: 1}}
          // hitslop={{top: 10, bottom: 20, left: 20, right: 20}}
          onPress={() => navigation.navigate('Details')}>
          <Image style={styles.tabBar} source={images.tab1} />
          {/*  <Image style={styles.tabBar} source={images.tab2} /> */}
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeScreen;
