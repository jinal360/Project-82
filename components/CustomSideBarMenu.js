import React, {Component} from 'react';
import {
    Text, 
    View, 
    KeyboardAvoidingView, 
    StyleSheet, 
    TextInput,
   TouchableOpacity,
    Alert,
    } from 'react-native';
    import {DrawerItems} from 'react-navigation-drawer'

    export default class CustomSidebarMenu extends React.Component{
      render(){
        return(
          <View style={styles.container}>
           <View style={styles.container}>
          <DrawerItems{...this.props}/>

          <TouchableOpacity
           style={styles.button}
           onPress={()=>{this.props.navigation.navigate('SignUpLoginScreen')}}
                >
                <Text>LogOut</Text>
              </TouchableOpacity>
          </View>
          </View>
        )
      }
    }

    const styles = StyleSheet.create({

      container:{
      flex: 1,
    },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    },
    }
)