'use strict'
import React from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Image
} from 'react-native'


export class LogoImg extends React.Component{
	  
	render(){
		
		return(
			<View style={styles.container}>
			  <Image
          style={styles.logoImg}
          source ={require('../../img/logoApay.png')}
        />
			</View>

			)
	}

}

const styles = StyleSheet.create({
  container: {
    
    //backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logoImg:{
  	alignItems:'flex-start',
  	width:100,
  	height:100,
    marginTop:50, 
    justifyContent:'center',
  }
});

