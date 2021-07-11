
import React, { Component  } from 'react';
import { View, 
  Text, 
  StyleSheet,
   TouchableOpacity,
    Image, 
    ImageBackground, 
    KeyboardAvoidingView, 
    Alert,
    Table,
    ScrollView,
    Row,
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Income from './Income';
import Expense from './Expense';
const Tab = createBottomTabNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <View style={{ flex: 1, }}>
        <View style={{ flex: 1 }}>
  
  
          <TouchableOpacity style={styles.Homebtn}
            onPress={() => navigation.openDrawer()}
          >
            <Image style={{ resizeMode: "cover", margin: 10 }} source={require('../asserts/img/Menu.png')}></Image>
          </TouchableOpacity>
        </View>
  
  
  
        <View style={{ flexDirection: 'row', flex: 1.5 }} >
  
          <View style={[styles.summary, { backgroundColor: '#2f3542' }]}
          >
            <Text style={styles.text}>Income</Text>
            <Text style={styles.text}>800</Text>
          </View>
          <View style={[styles.summary, { backgroundColor: '#1e272e' }]}>
            <Text style={styles.text2}>Expense</Text>
            <Text style={styles.text2}>200 </Text>
          </View>
  
        </View>
  
  
  
        <View style={{ flex: 10 }} >
  
  
          <MyTabs />
  
        </View>
  
  
      </View>




    );
  }
}
const styles = StyleSheet.create({

    Homebtn: {
      height: 60,
      backgroundColor: '#3498db'
  
    },
    add: {
      margin: 5,
      flex: 1,
  
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
  
  
    },
    image: {
  
      width: 80,
      height: 80,
  
    },
    summary: {
  
      flex: 1,
      backgroundColor: "blue",
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      color: '#009432',
      fontWeight: 'bold',
  
  
  
    },
    text2: {
      fontSize: 20,
      color: '#ff3f34',
      fontWeight: 'bold',
  
  
  
    },
    text3: {
      fontSize: 50,
      // marginBottom: 50,
      color: '#ff3f34',
      fontWeight: 'bold'
  
  
    },
    text4: {
      fontSize: 50,
      // marginBottom: 50,
      color: '#009432',
      fontWeight: 'bold'
  
  
    },
  
  
  
    input: {
      width: 350,
      height: 50,
      marginBottom: 20,
      // borderRadius: 10,
      backgroundColor: '#ff7675',
  
  
    },
    input2: {
      width: 350,
      height: 50,
      marginBottom: 20,
      // borderRadius: 10,
      backgroundColor: '#7bed9f',
  
  
    },
    button: {
      backgroundColor: '#007F3E',
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 10,
      elevation: 5,
      color: 'white',
  
    },
    button2: {
      backgroundColor: '#d63031',
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 10,
      elevation: 5,
      color: 'white',
  
    }
  
  })