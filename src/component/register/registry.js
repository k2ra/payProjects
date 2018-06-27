import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
   } from 'react-native';
 

export default class Registry extends React.Component {
  static navigationOptions =({ navigation })=>{
		return {
			header: null,
		}

	}
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Nombre' underlineColorAndroid="transparent"></TextInput>
        <TextInput style={styles.input} placeholder='Apellido' underlineColorAndroid="transparent"></TextInput>
        <TextInput style={styles.input} placeholder='Correo' underlineColorAndroid="transparent"></TextInput>
        <TextInput style={styles.input} placeholder='Contraseña' underlineColorAndroid="transparent"></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Guardar</Text>
        </TouchableOpacity>
     </View>
    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    alignItems: 'center',
    justifyContent: 'center'

  },
  input: {
    padding:15,
    fontSize: 16,
    width:250,
    backgroundColor:'rgba(255,255,255,0.3)',
    justifyContent:'center',
    marginBottom: 8,
  },
  button:{
    padding:15,
    backgroundColor: '#2980b9',
    borderRadius: 10,
    marginTop:20,
    width:250,

  },
  textButton:{
    textAlign:'center',
    fontSize :16,
    color:'#ffffff'
  }


});
