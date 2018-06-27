import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  Alert,
  TextInput,
  Navigator,
  TouchableHighlight } from 'react-native';
  import { createStackNavigator } from 'react-navigation';
  import loginView from './src/component/login/loginView';
  import dashboardView from'./src/component/dashboardView';
  import Registry  from './src/component/register/registry';

const Route = createStackNavigator(
  {
    Login: { screen: loginView },
    Dashboard: { screen: dashboardView},
    Registry: { screen: Registry},
  }
)

export default class App extends React.Component {
  render() {
    return (
     <Route style= {styles.container}/>
    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  }

});
