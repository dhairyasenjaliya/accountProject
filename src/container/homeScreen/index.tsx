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
    var data = [['Company', 'Helll0', 'check']];
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.listCategory}>
            <Text style={styles.categoryText}>All</Text>
            <Text style={styles.categoryText}>Prospects</Text>
            <Text style={styles.categoryText}>Clients</Text>
            <Text style={styles.categoryText}>Leads</Text>
          </View>
          <View>
            <FlatList
              data={singleData}
              renderItem={(data) => this.detailList(data)}
            />
          </View>
          <View>
            <FlatList
              data={multiData}
              renderItem={(data) => this.detailList(data)}
            />
          </View>
        </ScrollView>
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
