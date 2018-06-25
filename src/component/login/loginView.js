'use strict'

import React from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  Alert,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { LoginForm } from './loginForm';
import {LogoImg} from './logo';

export default class loginView extends React.Component{
	static navigationOptions =({ navigation })=>{
		return {
			header: null,
		}

	}
  
	render(){
		
		return(
			
        
      <View style={styles.container}>
        <View style={styles.logoContent}>
          <LogoImg/>
        </View>  
        
        <View style={styles.inputContainer}> 
              <TextInput placeholder = "secret code" style={styles.input} secureTextEntry={true} underlineColorAndroid="transparent"/>
        
          <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('Dashboard')}>

            <Text>Confirmar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContent}>
          <Text >Don't have a wallet?</Text>
          <Text style={styles.textSignup}>Create</Text>
        </View>
			</View>
       
			

			)
	}
	 onLogin(){
    alert("pulsado");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center'

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#9E9E9E',
    padding: 10,
    width:100,
    justifyContent:'center',
    borderRadius:20,
    marginTop:20
   
  },
  inputContainer:{
    flex:3,
    padding:20,
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:1,
  },
  input:{
    padding:20,
    fontSize: 16,
    width:250,
    backgroundColor:'rgba(255,255,255,0.1)',
    justifyContent:'center',
    color:'#ffffff',
   
  },
  textSignup:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500',
    marginLeft: 8
  },
  logoContent:{
    flex:3,
    justifyContent:'center',
    borderWidth:1,
    alignItems:'center'
  },
  bottomContent:{
    flex: 2,
    justifyContent: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row',
    borderWidth:1,
  }

});

