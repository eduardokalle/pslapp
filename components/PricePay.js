import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Button, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Social from './Social';

function PricePay (props) {
   
   const TablePrice = {
    tableHead: ['', 'Tipo Pago ', 'Tiempo', 'Precio'],
    tableTitle: ['Medicia G', 'Enfermeria', 'Pediatria', 'Odontologia','Fisioterapia','Psicologia'],
    tableData: [
      ['*************', '*****', '*****'],
      ['*************', '*****', '*****'],
      ['*************', '*****', '*****'],
      ['*************', '*****', '*****'],
      ['*************', '*****', '*****'],
      ['*************', '*****', '*****']
    ]
  }
   
 
  
  return (
       
   
      <>
        <View style={styles.vheader}>
        </View>
          <Social/>  
        <View style={styles.container}>
          <ImageBackground
              source={require("../assets/images/Payment.png")}
              resizeMode="cover"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
          >
              <View style={styles.overlay}>
              <Text style={styles.scienceChannel}>Precios y Pagos </Text>
              <View style={styles.following}>
                <View style={styles.vbtn}> 
                  <Icon.Button style={styles.vbtnPhone}  name="cc-mastercard" onPress={() => {
                                            Linking.openURL('');
                                        }} solid>
                        Pagos en linea 
                  </Icon.Button>
                </View> 
              </View>
              <Text style={styles.followers}>Conectamos posibilidades para cumplir sueños</Text>
              </View>
          </ImageBackground>
        </View>
        <View style={styles.table}>
            <View style={styles.containerTable}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row data={TablePrice.tableHead} flexArr={[1, 1, 1, 1]} style={styles.headTable} textStyle={styles.textTable}/>
                <TableWrapper style={styles.wrapperTable}>
                  <Col data={TablePrice.tableTitle} style={styles.titleTable} heightArr={[45,45]} textStyle={styles.textTable}/>
                  <Rows data={TablePrice.tableData} flexArr={[1, 1, 1]} style={styles.rowTable} textStyle={styles.textTable}/>
                </TableWrapper>
              </Table>
          </View>
        </View>

      </>    
);
}

const styles = StyleSheet.create({
container: {
  width: 400,
  height: 246,
  overflow: "hidden"
},
image: {
  flex: 1
},
image_imageStyle: {},
overlay: {
  backgroundColor: "rgba(30,26,26,0.4)",
  flex: 1
},
scienceChannel: {
  color: "rgba(255,255,255,1)",
  fontSize: 24,
  marginTop: 43,
  alignSelf: "center"
},
following: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  position: 'relative',
  bottom: -20,
},
space: { 
  height: 30,
  backgroundColor: "#fff",
  
  },
text: {
  color: "rgba(31,178,204,1)",
  fontSize: 14,
  alignSelf: "center"
},
followers: {
  color: "rgba(255,255,255,1)",
  fontSize: 16,
  marginTop: 39,
  alignSelf: "center"
},

vheader : {
  width: 'auto',
  height: 50,
  backgroundColor : '#fff',
  color : '#fff',
  paddingLeft: 0,
  paddingRight:0,
  //borderColor: 'red'
},  
vbtn: {
  marginRight: 10,
},
table: {
  width: 400,
  height: 400, 
},

// Style Table 

containerTable: { 
  flex: 1, 
  padding: 11, 
  paddingTop: 28, 
  backgroundColor: '#fff' 
},
headTable: {  
  height: 40,  
  backgroundColor: '#f1f8ff'  
},
wrapperTable: { 
  flexDirection: 'row' 
},
titleTable: { 
  backgroundColor: '#f6f8fa' 
},
rowTable: {  
  height: 45  
},
textTable: { 
  textAlign: 'center'
},
vbtnPhone: {
  backgroundColor : '#C6469A'
}


});

export default PricePay;
