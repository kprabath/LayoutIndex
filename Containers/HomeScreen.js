import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CustomButton from '../Components/CustomButton';
import MyModal from '../Components/MyModal';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {bottomTriangle ,topTriangle} from '../Components/triangles'
const URL = 'https://reqres.in/api/users?page=2';
const SearchView = (props) => {
  return (
    <View style={styles.searchViewContainer}>
      <TextInput
        onChangeText={(text) => props.typeListner(text)}
        style={{
          flex: 0.58,
          backgroundColor: 'rgba(0 , 0 , 0 , 0.1)',
          paddingLeft: 8,
        }}
        placeholder="User ID"
      />
      <CustomButton
        onPress={props.searchPress}
        flex={0.38}
        padding={5}
        text="Search"
      />
    </View>
  );
};

const RowItem = ({title, value}) => {
  const TextItem = ({value, color}) => (
    <Text style={{flex: 0.2, color: color}}>{value}</Text>
  );
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginBottom: 2}}>
      <TextItem color="black" value={title} />
      <TextItem color="grey" value={value} />
    </View>
  );
};

export default class HomeScreen extends React.Component {
  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({userData: data.data}, () => SplashScreen.hide());
        this.storeData(data.data);
      })
      .catch(this.retreiveData);
  }
  storeData = (data) => {
    AsyncStorage.setItem('users', JSON.stringify(data))
      .then(() => {
        console.log('data saved');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  retreiveData = () => {
    AsyncStorage.getItem('users')
      .then((value) => {
        const users = JSON.parse(value);
        this.setState({userData: users});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  filterData = () =>
    this.state.userData.filter((element, index) => {
      console.log('elment', element);
      if (element.id == this.state.idText) {
        this.setState({selectedIndex: index, isVisible: true});
      }
    });
  textChangeListener = (text) => {
    this.setState({
      idText: text,
    });
  };
  state = {
    isVisible: false,
    userData: [],
    selectedIndex: 0,
    idText: '',
  };

  toggleVisibility = () =>
    this.setState((prevState) => {
      return {
        ...this.state,
        isVisible: !prevState.isVisible,
      };
    });

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.setState({
            isVisible: true,
            selectedIndex: index,
          })
        }
        style={styles.renderItem}>
        <RowItem title="ID" value={item.id} />
        <RowItem title="Name" value={item.first_name} />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'rgba(0 , 0 , 0 , 0.05)'}}>
        <StatusBar backgroundColor="royalblue" />

        <SearchView
          searchPress={this.filterData}
          typeListner={this.textChangeListener}
        />

        <View style={styles.flatListContainer}>
          <Text style={styles.avilableUsers}>AVILABLE USERS</Text>
          {this.state.userData && (
            <FlatList
              style={{display: 'flex', marginBottom: 20, paddingBottom: 40}}
              data={this.state.userData}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
        <MyModal
          selectedIndex={this.state.userData[this.state.selectedIndex]}
          toggleVisibility={this.toggleVisibility}
          isVisible={this.state.isVisible}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  searchViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 20,
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  flatListContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  avilableUsers: {color: 'black', fontSize: 14},
  renderItem: {
    display: 'flex',
          flexDirection: 'column',
          padding: 20,
          backgroundColor: 'white',
          // marginBottom: 5,
          marginTop: 20,
  },
});
