
import React, { Component } from 'react';
import {
  View,
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




export class IncomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      amount: '',
      category: '',
      note: ''
    };





  }
  cleatText() {

    this.setState({
      amount: '',
      category: '',
      note: '',
      date: ''
    })
  }
  showcurrentlDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    const today = date + '-' + month + '-' + year;
    // console.log(typeof today);

    // let newDate = new Date(today);
    // console.log('new Date'+typeof today);

    console.log("today" + today);







  }






  saveIncome() {
    // const date = new Date();

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const today = date + '-' + month + '-' + year;


    fetch('http://192.168.1.3:3000/Income/save', {
      method: 'POST',
      body: JSON.stringify({
        date: today,
        amount: this.state.amount,
        category: this.state.category,
        note: this.state.note,


      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json()).then((json) => console.log(json));


    this.cleatText();

    Alert.alert('Income Success')




  }



  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={styles.text4}>New Income</Text>


        <TextInput style={styles.input2} label="enter value"

          value={this.state.amount}
          onChangeText={(value) => {
            this.setState({
              amount: value
            })
          }}
        />

        <TextInput style={styles.input2} label="category"

          right={<TextInput.Affix text="/10" />}
          value={this.state.category}
          onChangeText={(value) => {
            this.setState({
              category: value
            })
          }}
        />
        <TextInput style={[styles.input2, { height: 60 }]} label="add note(/20)"
          right={<TextInput.Affix text="/20" />}
          value={this.state.note}
          onChangeText={(value) => {
            this.setState({
              note: value
            })
          }}
        />

        <TouchableOpacity style={styles.button}
          onPress={

            this.saveIncome.bind(this)

          }

        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>SUBMIT</Text>
        </TouchableOpacity>


      </KeyboardAvoidingView>




    );
  }
}

export class ExpenseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      amount: '',
      category: '',
      note: '',
    };
  }
  cleatText() {
    console.log('awaaa');
    this.setState({
      amount: '',
      category: '',
      note: ''
    })
  }
  saveExpense() {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const today = date + '-' + month + '-' + year;
    fetch('http://192.168.1.3:3000/Expense/save', {
      method: 'POST',
      body: JSON.stringify({
        date: today,
        amount: this.state.amount,
        category: this.state.category,
        note: this.state.note,


      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json()).then((json) => console.log(json));

    this.cleatText();

    Alert.alert('Income Success')

  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

        <Text style={styles.text3}>New Expense</Text>

        <TextInput style={styles.input} label="enter value"

          value={this.state.amount}
          onChangeText={(value) => {
            this.setState({
              amount: value
            })
          }}
        />

        <TextInput style={styles.input} label="category"

          right={<TextInput.Affix text="/10" />}
          value={this.state.category}
          onChangeText={(value) => {
            this.setState({
              category: value
            })
          }}
        />
        <TextInput style={[styles.input, { height: 60 }]} label="add note(/20)"

          right={<TextInput.Affix text="/20" />}
          value={this.state.note}
          onChangeText={(value) => {
            this.setState({
              note: value
            })
          }}
        />
        <TouchableOpacity style={styles.button2}
          onPress={
            this.saveExpense.bind(this)


          }

        >
          <Text style={{ color: 'white', fontWeight: 'bold' }} >SUBMIT</Text>
        </TouchableOpacity>



      </KeyboardAvoidingView>


    );
  }
}



function MyTabs() {
  return (
    <Tab.Navigator animationType="slide"
      tabBarOptions={{
        showLabel: false,
        style: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          height: 70,

        }
      }}>
      <Tab.Screen name="Expense" component={IncomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground source={require('../asserts/img/Plus.png')} style={styles.image}></ImageBackground>

            </View>)
        }} />

      <Tab.Screen name="Income" component={ExpenseScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../asserts/img/Minus.png')} style={styles.image}></ImageBackground>

          </View>)
      }}
      />
    </Tab.Navigator>
  );
}



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: [],
      resp: [],
      expenses: '',
      incomes: '',
    };

    this.getAllIncomes()
     this.getAllExpences()
  }


  getAllIncomes() {
    const date = new Date();

    fetch('http://192.168.1.3:3000/Income/getAll'



    ).then((response) => response.json())
      .then((response) => {
        let resp = response.data

        this.setState({ resp })
        this.calTotalIncome();

      })
      .catch((error) => console.error(error));

  }

  calTotalIncome() {
    let temp = 0
    this.state.resp.map((resp) => (
      temp = temp + resp.amount
    ))
    console.log(temp)
    this.setState({ incomes: temp })
  }



  calTotalExpence() {
    let temp = 0
    this.state.expense.map((expense) => (
      temp = temp + expense.amount
    ))
    console.log(temp)
    this.setState({ expenses: temp })
  }

  getAllExpences() {
    
    fetch('http://192.168.1.3:3000/Expense/getAll'



    ).then((response) => response.json())
      .then((response) => {
        let expense = response.data

        this.setState({ expense })
        this. calTotalExpence();

      })
      .catch((error) => console.error(error));

  }




  render() {
    const { navigation } = this.props
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
            <Text style={styles.text}>{this.state.incomes}</Text>
          </View>
          <View style={[styles.summary, { backgroundColor: '#1e272e' }]}>
            <Text style={styles.text2}>Expense</Text>
            <Text style={styles.text2}>{this.state.expenses}</Text>
          </View>

        </View>



        <View style={{ flex: 10 }} >


          <MyTabs />

        </View>


      </View>




    );
  }
}





function Setting({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 1 }}>

        <TouchableOpacity style={styles.Homebtn} icon="clipboard-arrow-right"
          onPress={() => navigation.openDrawer()}
        >


          <Image style={{ position: 'relative', resizeMode: "cover", margin: 10 }} source={require('../asserts/img/Menu.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 6.5, justifyContent: 'center', alignItems: 'center' }}>


      </View>






    </View>
  );
}
function CustomDrawerContent(props) {



  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('name')
      console.log("data removed")
    } catch (e) {
      // remove error
    }

    console.log('Done.')
  }

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1, top: 0, bottom: 0 }}  {...props}>
      <DrawerItemList  {...props} />
      <DrawerItem {...props}
        labelStyle={{ color: '#00a8ff', fontSize: 20, alignItems: 'center', justifyContent: 'center' }}
        label="Sign out"

        onPress={() => {

          removeValue();


          props.navigation.navigate('Login')
        }}

      />

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator

      drawerContentOptions={{
        flex: 1,
        activeTintColor: 'white',
        itemStyle: { marginVertical: 10 },
        backgroundColor: 'red',
        activeBackgroundColor: '#3498db',
        inactiveTintColor: 'black',
        inactiveBackgroundColor: 'white',
        labelStyle: {
          marginLeft: 5,
          fontSize: 17
        }


      }}


      drawerContent={props => <CustomDrawerContent style={{ backgroundColor: 'white' }} {...props} />}>

      <Drawer.Screen options={{
        //  title: 'Homes',
        drawerIcon: ({ focused, size }) => (
          <Image style={{ resizeMode: "cover" }} source={require('../asserts/img/Home.png')}></Image>

        ),
      }} name="Home" component={Home} />






      <Drawer.Screen options={{
        //  title: 'Homes',
        drawerIcon: ({ focused, size }) => (
          <Image style={{ resizeMode: "cover" }} source={require('../asserts/img/Income.png')}></Image>

        ),
      }}
        name="Income" component={Income} />
      <Drawer.Screen options={{
        //  title: 'Homes',
        drawerIcon: ({ focused, size }) => (
          <Image style={{ resizeMode: "cover" }} source={require('../asserts/img/Expence.png')}></Image>

        ),
      }}
        name="Expense" component={Expense} />


      <Drawer.Screen options={{

        drawerIcon: ({ focused, size }) => (
          <Image style={{ resizeMode: "cover" }} source={require('../asserts/img/Settings.png')}></Image>

        ),
      }}
        name="Settings" component={Setting} />

    </Drawer.Navigator>
  );
}



export default function App() {






  return (

    <MyDrawer />

  );
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