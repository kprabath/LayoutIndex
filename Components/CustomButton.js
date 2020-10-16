import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {BottomTriangle} from './triangles'

export default class CustomButton extends React.Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity activeOpacity = {0.95} style = {{
         flex:this.props.flex , 
         backgroundColor:'#4682B4' , 
         display:'flex' , 
         flexDirection:'column' , 
         justifyContent:'center' , 
         padding:this.props.padding
      }} onPress={() => onPress()}>
           <BottomTriangle/>
          <Text style={styles.textStyle}>{text}</Text>  
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  rect: {
    flex: 1 ,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFF' , 
    textAlign:'center'
  }
});
