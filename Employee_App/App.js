import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Home from './screens/Home'
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()

const myOptions = {
      title:"Home",
      headerTintColor:"white",
      headerStyle:{
          backgroundColor:"#006aff"
      }
}

function App() {
  return (
    <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={myOptions}
            />
          <Stack.Screen 
            name="Create" 
            component={CreateEmployee} 
            options={{...myOptions,title:"Create Employee"}}  
          />
          <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={{...myOptions,title:"Profile"}}  
          />
        </Stack.Navigator>
      
    </View>
  );
}

export default()=>{
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    
    
  },
});
