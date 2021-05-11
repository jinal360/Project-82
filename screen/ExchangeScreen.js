import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    Image,
    TextInput, 
    TouchableOpacity,
    Alert,
    Modal,
    KeyboardAvoidingView,
     } from 'react-native';
    import firebase from 'firebase';
    import db from '../config'

     export default class ExchangeScreen extends React.Component{

     createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  addItem =(bookName,reasonToRequest)=>{
    var itemName = this.state.itemName
    var itemDescription = this.state.itemDescription
    db.collection('exchange_item').add({
        "item_name":itemName,
        "item_discirption":itemDescription,
        "exchange_Id":randomExchangeId,
    })

    this.setState({
        itemName :'',
        itemDescription : ''
    })

        return Alert.alert("Exchanged item Successfully")
  }
       render(){
         return(
           <View>
           <KeyboardAvoidingView>
            <TextInput
                style ={styles.formTextInput}
                placeholder={"item name"}
                onChangeText={(text)=>{
                    this.setState({
                        itemName:text
                    })
                }}
                value={this.state.itemName}
                />

                     <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"wirte item description"}
                onChangeText ={(text)=>{
                    this.setState({
                      itemDescription:text
                    })
                }}
                value ={this.state.itemDescription}
                />

                <TouchableOpacity
                style={styles.button}
                 onPress={()=>{this.addItem(this.state.itemName,                               this.state.itemDescription)}}
                >
                <Text>Exchange</Text>
              </TouchableOpacity>
           </KeyboardAvoidingView>
           </View>
         )
       }

     }

     const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)