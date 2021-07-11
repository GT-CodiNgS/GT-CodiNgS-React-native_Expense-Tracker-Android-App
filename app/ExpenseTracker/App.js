import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './components/Login'
import HomePage from './components/HomePage'
import load from './components/load'
// import income from './components/Sample'

const Stack = createStackNavigator();




export default class App extends Component {
  constructor(props) {


    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator  headerMode="none" >
       {/* <Stack.Screen  name="income" component={income} />  */}
      <Stack.Screen  name="load" component={load} /> 
       <Stack.Screen  name="Login" component={Login} /> 
      <Stack.Screen  name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    

     
     
    )
  }
}




