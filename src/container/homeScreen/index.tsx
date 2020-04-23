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
} from 'react-native';
import styles from './styles';
// import DropdownMenu from 'react-native-dropdown-menu';
import images from '../../assets/';
import SearchData from '../../component/customTextBox';

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

const date = '29/12/2018';
const time = '02:00pm';
class HomeScreen extends React.Component<IProps, IState> {
  state: {};
  constructor(props: any) {
    super(props);
    this.state = {data: [], isLoading: true};
  }

  componentDidMount() {}
  // Name of project, Name of company,   and techstack.

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

  render() {
    // var data = [['Company', 'Helll0', 'check']];
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {/* <Image style={styles.header} source={images.header1} /> */}
        <ScrollView>
          <View style={styles.searchContain}>
            <View style={styles.listCategory}>
              <Text style={styles.categoryTextAll}>All</Text>
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
            <View style={styles.typeText}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Image style={styles.doneIcon} source={images.done} />
                <Text style={{marginHorizontal: 5, marginVertical: 2}}>
                  Prospects
                </Text>
              </View>

              <Image style={styles.doneIcon} source={images.done} />
              <Text>Client</Text>
              <Image style={styles.doneIcon} source={images.done} />

              <Text>Leads</Text>
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
              <Text style={styles.categoryTextTimeColor}>{date}</Text>
              <Text>{time}</Text>
            </View>
            <View style={styles.dataTimeContainFlex}>
              <Image style={styles.threeIcon2} source={images.potentail} />
              <Image style={styles.threeIcon} source={images.calender} />
              <Image style={styles.threeIcon} source={images.callBack} />
              <Image style={styles.threeIcon} source={images.dollar} />
            </View>
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
      </SafeAreaView>
    );
  }
}

{
  /* <TouchableOpacity
style={styles.flatlistStyle}
onPress={() =>
  navigation.navigate('Details', {
    allData: data.item,
  })
}> 
<Text>hy</Text>
</TouchableOpacity> */
}

export default HomeScreen;
