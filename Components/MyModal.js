import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Image,
} from 'react-native';
import {TopTriangle , BottomTriangle} from '../Components/triangles'
// You can import from local files
import CustomButton from './CustomButton';

const RowItem = (props) => {
  const TextItem = ({flex, value, color}) => (
    <Text style={{flex: flex, color: color, fontSize: 12}}>{value}</Text>
  );
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
      <TextItem flex={0.3} color="black" value={props.label} />
      <TextItem flex={0.7} color="grey" value={props.val} />
    </View>
  );
};

const Item = (props) => {
  const {avatar, email, first_name, last_name} = props.data;
  return (
    <View
      style={styles.item}>
      <View style={{flex: 0.28, alignItems: 'center'}}>
        <Image
          style={{
            height: 60,
            width: 60,
            // resizeMode:'center' ,
            borderRadius: 30,
          }}
          source={{
            uri: avatar,
          }}
        />
      </View>

      <View style={{display: 'flex', flexDirection: 'column', flex: 0.7}}>
        <RowItem label="first Name" val={first_name} />
        <RowItem label="Last Name" val={last_name} />
        <RowItem label="Email" val={email} />
      </View>
    </View>
  );
};

export default class MyModal extends React.Component {
  // componentDidUpdate(prevProps)
  // {
  //   if(prevProps.selectedIndex.id != )
  // }

  render() {
    console.log('MODAL PROPS:', this.props);
    return (
      <View style={styles.pentagon}>
        <Modal
          animationType="none"
          transparent={true}
          //backgroundColor="rgba(0,0,0,0.3)"
          visible={this.props.isVisible}
          onRequestClose={this.props.toggleVisibility}>
          <View style={styles.cardContainer}>
            <View style={styles.cardModal}>
            <TopTriangle/>

              <Item data={this.props.selectedIndex} />

              <View
                style={styles.btnWrapper}>
                <CustomButton
                  text="Close"
                  flex={0.25}
                  padding={10}
                  onPress={this.props.toggleVisibility}
                />
              </View>
              <BottomTriangle/>
              
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pentagon: {
    backgroundColor: 'transparent',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    // marginTop:20 ,

    alignItems: 'center',
    backgroundColor: 'rgba(25,22,22,0.5)',
  },
  cardModal: {
    display: 'flex',
    flexDirection: 'column',
    marginTop:30 ,
    justifyContent: 'center',
    alignItems: 'center',

    //marginTop: -5,
    width: '95%',

    // height: '30%',
    padding: 10,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  
  item:{
    display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        //backgroundColor:'red' ,
        alignItems: 'center',
        justifyContent: 'space-between',

  } , 
  rowItem:{

  } , 
  btnWrapper:{
    display: 'flex',
    flexDirection: 'row',
    //  backgroundColor:'red' ,
    //flex: 1,
    // marginLeft: 15,
    justifyContent: 'center',
  }
});
