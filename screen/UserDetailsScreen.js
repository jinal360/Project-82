import Rect, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class UserDetailsScreen extends Component{
     constructor(){
      super()
    this.state={
      emailId   : '',
      firstName : '',
      lastName  : '',
      address   : '',
      contact   : '',
      docId     : '',
        recieverId:this.props.navigation.getParam('details')["user_id"],
     }
}
  getUserDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('users').where('email_id','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.email_id,
          firstName : data.first_name,
          lastName  : data.last_name,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
        })
      });
    })
  }

  addBarters=()=>{
    db.collection("my_barters").add({
    "exchange_id":this.state.exchangeId,
    "item_name": this.state.itemName,
    "exchanger_name":this.state.exchangerName,
    "exchanger_contact":this.state.exchangerContact,
    "exhanger_address":this.state.exchangerAddrees,
    "exchange_status":this.state.exchangeStatus,
    })
}


 render(){
     return(
         <View> 
        <TouchableOpacity
         onPress={()=>{
          this.addBarters 
        }}>
         <Text style={botton.contanier}> exchange</Text>
         </TouchableOpacity>
         </View>
     )  
 }
}