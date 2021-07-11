import React, { Component } from 'react';
import { View,  Text, StyleSheet, TouchableOpacity, Image, ScrollView,} from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';


export default class Income extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      signName:'',
      signPw:'',
      resp:[],
        tableHead: [ 'Date',  'Amount','category','note'],
        widthArr: [100,60, 70, 150]

    };
    
  
    this.getAll();
   
  }
  
 


  getAll() {
    const date = new Date();

    fetch('http://192.168.1.3:3000/Income/getAll'



    ).then((response) => response.json())
      .then((response) => {
        
       
        
        let resps = response.data

        // console.log('aaaaaaaaaaaaaaaaaa'+resps);
        this.setState({
          resp: resps })
      
      
      // console.log('date='+this.state.resp[0].date);
    


      })
      .catch((error) => console.error(error));

  }

  render() {
    
    const { navigation } = this.props


    const tableData = this.state.resp.map(record => ([record.date, record.amount, record.category,record.note]));

    console.log(tableData);


          return (
        <View style={{ flex: 1, }}>
      
        <View style={{ flex: 1, }}>
  
          <TouchableOpacity style={styles.Homebtn} icon="clipboard-arrow-right"
            onPress={() => navigation.openDrawer()}
          >
  
  
            <Image style={{ position: 'relative', resizeMode: "cover", margin: 10 }} source={require('../asserts/img/Menu.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'white', flex:1.5, justifyContent: 'center', alignItems: 'center' }}>
          
          
        <Text style={styles.mainText}>ALL INCOMES</Text>
          
        
  
        </View>
        
       
        <View style={{ flex:9, justifyContent: 'center', alignItems: 'center' }}>
    {/* **************************************** */}
    <ScrollView horizontal={true}>
                    <View style={{ padding: 10 }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                {
                                    tableData.map((rowData, index) => (
                                        <Row
                                            key={index}
                                            data={rowData}
                                            widthArr={this.state.widthArr}
                                            style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                            textStyle={styles.text}
                                        />
                                    ))
                                }
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>



  
        </View>
  
  
  
  
  
  
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#009432'},
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1'  },
    Homebtn: {
        height: 60,
        backgroundColor: '#3498db'
    
      },
      mainText: {
        fontSize:50,
        color: '#009432',
        fontWeight: 'bold'
    
      }

});