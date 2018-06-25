'use strict'

import React from 'react';
import  {
	Component,
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native';
import { createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


export default class historyView extends React.Component{
	static navigationOptions:{
      title : 'Dashboard',
      headerStyle: {
      	backgroundColor: '#f4511e', //color del header
      },
      headerTintColor: '#000000', //color del back y titulo
      headerTitleStyle:{
      	fontWeight: 'bold',//tipo de fuente titulo
      } , 
    };
  
	render(){
		return(
			<View style = {styles.container}>
				<Text>Historial</Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center'

  }

});