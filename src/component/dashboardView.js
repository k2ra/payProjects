'use strict'

import React from 'react';
import  {
	Component,
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native'
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import historyView from './historyView';
import Icon from 'react-native-vector-icons/Ionicons';

class dashboardView extends React.Component{
	static navigationOptions =({ navigation })=>{
		return {
			header: null,
		}

	}
	render(){
		return(
			<View style = {styles.container}>
				<Image
					style={styles.imgQrCode}
					source={require('../img/QRCode.png')}
				/>
				<Text>Su saldo: $25.00</Text>
				<View style= {styles.buttonContent}>
					<TouchableHighlight style= {styles.buttonPagar}>
						<Text style={styles.textButton}>Pagar</Text>
					</TouchableHighlight>
					<TouchableHighlight style= {styles.buttonRecibir}>
						<Text style={styles.textButton}>Recibir</Text>
					</TouchableHighlight>
				</View>
			</View>
			);
	}
}

export default createBottomTabNavigator({
  Home: {
  	screen: dashboardView,
  	navigationOptions:{
  		tabBarLabel:'Home',
  		
  	}


  } ,

  History: {screen:historyView},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    alignItems: 'center',
    //justifyContent: 'center'

  },
  buttonPagar: {
    alignItems: 'center',
    backgroundColor: '#1DE9B6',
    padding: 10,
    width:80,
    justifyContent:'center',
    borderRadius:20,
    marginLeft:10,
   
  },
  buttonRecibir: {
    alignItems: 'center',
    backgroundColor: '#FFB74D',
    padding: 10,
    width:80,
    justifyContent:'center',
    borderRadius:20,
    marginLeft:10,
   
  },
  buttonContent:{
  	alignItems:'center',
  	flexDirection:'row',
  	margin: 10,
  },
  textButton:{
  	fontSize: 16,
  },
  textGeneral:{
  	fontSize: 16,
  	fontWeight: '500',

  },
  imgQrCode:{
  	alignItems:'flex-start',
  	width:150,
  	height:150,
  	marginTop:30, 
  }

});

//module.exports = dashboardView;