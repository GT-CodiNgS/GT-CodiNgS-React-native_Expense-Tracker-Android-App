import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert

} from 'react-native';


const Tab = createMaterialTopTabNavigator();


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      note: ''

    };
  }


  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('log', "yes")
      console.log("data saved")
    } catch (e) {
      // saving error
    }
    }


  //   getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('name')
  //     if(value !== null) {
  //         console.log("Value is "+value)
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }
  //   }

  //   removeValue = async () => {
  //       try {
  //         await AsyncStorage.removeItem('name')
  //         console.log("data removed")
  //       } catch(e) {
  //         // remove error
  //       }

  //       console.log('Done.')
  //     }


  render() {
    return (

      <Tab.Navigator>
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>

    );
  }
}



class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signName: 'aaa',
      signPw: '111'

    };
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('log', "yes")
      console.log("data saved")
    } catch (e) {
      // saving error
    }
    }



  getAll() {
    const date = new Date();

    fetch('http://192.168.1.3:3000/User/getAll'



    ).then((response) => response.json())
      .then((response) => {
        let resp = response.data
        this.setState({ resp })
      
      
        for (var i of resp) {

          if (this.state.signName ==i.name  ) {
            if (this.state.signPw == i.pw) {
              this.storeData.bind(this)

              this.props.navigation.navigate('HomePage')


            } else {
              Alert.alert('password does not matching')
            }
          } else {
            // Alert.alert('username does not matching')
          }


        }


      })
      .catch((error) => console.error(error));

  }


  render() {
    return (


      <KeyboardAvoidingView style={styles.fullFrame} behavior="padding">

        <ImageBackground source={require('../asserts/img/signin.png')} style={styles.image}></ImageBackground>
        <TextInput
          style={styles.input}
          label="User Name"
          right={<TextInput />}
          value={this.state.signName}
          onChangeText={(value) => {
            this.setState({
              signName: value
            })
          }}
        />
        <TextInput  label="Password"
          style={styles.input}
          value={this.state.signPw}
          onChangeText={(value) => {
            this.setState({
              signPw: value
            })
          }}
          secureTextEntry right={<TextInput.Icon name="eye" />}
        />



        <TouchableOpacity style={styles.button}
          onPress= {
            this.getAll.bind(this)

          } >
          <Text>SIGN IN</Text>
        </TouchableOpacity>





        <Button icon="page-layout-sidebar-right" style={styles.text}
          onPress={() => {
            this.props.navigation.navigate('Sign Up')
          }}>
          Create New Account ?
        </Button>

      </KeyboardAvoidingView>

    );
  }
}





class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwCheck: '',
      pw: ''

    };
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('name', "yes")
      console.log("data saved")
    } catch (e) {
      // saving error
    }
  }



  saveUser() {
    const date = new Date();

    fetch('http://192.168.1.3:3000/User/save', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        pw: this.state.pw,

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json()).then((json) => console.log(json));
    Alert.alert('Login Success')
    // this.storeData.bind(this);
    console.log(this.state.name, this.state.pw)
    this.props.navigation.navigate('HomePage')

  }

  // signUpUser(){
  // this.storeData.bind(this);
  // this.saveUser.bind(this);
  // }

  render() {
    return (
      <KeyboardAvoidingView style={styles.fullFrame} behavior="padding">

        <ImageBackground source={require('../asserts/img/signUp.png')} style={styles.image}></ImageBackground>
        <TextInput
          style={styles.input}
          label="User Name"
          right={<TextInput.Affix text="/10" />}
          value={this.state.name}
          onChangeText={(value) => {
            this.setState({
              name: value
            })
          }}
        />

        <TextInput
          style={styles.input}
          label="New Password"
          value={this.state.pwCheck}
          onChangeText={(value) => {
            this.setState({
              pwCheck: value
            })
          }}
        />
        <TextInput
          style={styles.input}
          label="Confirm Password"
          value={this.state.password}
          onChangeText={(value) => {
            this.setState({
              pw: value
            })

          }}
        />

        <TouchableOpacity style={styles.button2}


          onPress={

            this.saveUser.bind(this)
            // this.signUpUser.bind(this)
          }

        >
          <Text>SIGN UP</Text>
        </TouchableOpacity>

        <Button icon="page-layout-sidebar-left" style={styles.text}
          onPress={() => {
            this.props.navigation.navigate('Sign In')
          }}>
          Already have Account ?
        </Button>



      </KeyboardAvoidingView>
    );
  }
}





const styles = StyleSheet.create({

  input: {
    width: 350,
    height: 50,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: 'white',


  },
  button: {
    backgroundColor: '#007F3E',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    elevation: 5,

    color: 'white'
    // borderWidth: 2,
    // borderColor:'black'

  },
  button2: {
    backgroundColor: '#249af4',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',


  },
  text: {
    marginTop: 3,
    opacity: 0.7,





  },
  image: {
    width: 300,
    height: 275,
    resizeMode: "cover"
  },
  fullFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#249af4'

  }

})



