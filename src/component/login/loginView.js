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
  constructor(props){
    super(props);
    this.state={
      secretCode:'',
    }

  }

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
              <TextInput 
              placeholder = "secret code" 
              style={styles.input} secureTextEntry={true} 
              underlineColorAndroid="transparent"
              onChangeText = {(secretCode) => this.setState({secretCode})}
              />
        
          <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('Dashboard')}>

            <Text style={styles.textButton}>Confirmar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContent}>
          <Text >Don't have a wallet?</Text>
          <TouchableOpacity  onPress={() =>this.props.navigation.navigate('Registry')}>
            <Text style={styles.textSignup}>Create</Text>
          </TouchableOpacity>
        </View>
			</View>
       
			

			)
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    alignItems: 'center',
    justifyContent: 'center'

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 15,
    width:250,
    justifyContent:'center',
    borderRadius:10,
    marginTop:20,   
  },
  textButton:{
    textAlign:'center',
    fontSize :16,
    color:'#ffffff'
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

