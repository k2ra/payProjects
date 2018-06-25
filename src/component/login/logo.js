'use strict'
import React from 'react';
import {
  StyleSheet,
  Text, 
  View,
} from 'react-native'


export class LogoImg extends React.Component{
	  
	render(){
		
		return(
			<View style={styles.container}>
			  <Text>image aqui</Text>
			</View>

			)
	}

}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center'

  }
});

