import React from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  Alert,
  TextInput,
  TouchableOpacity 
} from 'react-native'
import { createStackNavigator } from 'react-navigation';

export class LoginForm extends React.Component{
	static navigationOptions =({ navigation })=>{
		return {
			header: null,
		}

	}
  
	render(){
		
		return(
			<View style={styles.container}>
			    <View style={styles.inputContainer}> 
		          	<TextInput placeholder = "secret code" style={styles.input} secureTextEntry={true}/>
		        </View>
        		<View style={styles.inputContainer}>
			        <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('Dashboard')}>

			          <Text>Confirmar</Text>
			        </TouchableOpacity>
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
    backgroundColor: '#8BC34A',
    padding: 10,
    width:100,
    justifyContent:'center',
    borderRadius:20,
   
  },
  inputContainer:{
    padding:20,
    justifyContent:'center',
    alignItems: 'center',
  },
  input:{
    padding:20,
    borderStyle: 'solid',
    width:250,
    justifyContent:'center',
   
  }

});

