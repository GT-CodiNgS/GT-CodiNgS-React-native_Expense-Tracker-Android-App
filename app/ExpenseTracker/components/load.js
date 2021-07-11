import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class load extends Component {
  constructor(props) {
    // this.getData();

    setTimeout(function(){
        props.navigation.navigate('Login');
      }, 1000);
   
   
    super(props);
    this.state = {
    };
  }




    getData = async () => {
    try {
      const value = await AsyncStorage.getItem('name')
      if(value !== null) {
        
          this.props.navigation.navigate('HomePage')
        
     
      }else{

        setTimeout(function(){
          props.navigation.navigate('Login');
        }, 3000);
     
      }
    } catch(e) {
      // error reading value
    }
    }


  render() {
   
    return (
        
        <View style={styles.fullFrame}>
        <ImageBackground source={require('../asserts/img/open.png' )}  style={styles.image}></ImageBackground>
        <Text>Expense Tracker App</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({


    fullFrame:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'white',
     
      
      },
      image:{
        
        width:400,
        height:250,
        resizeMode: "cover"
       }
})
