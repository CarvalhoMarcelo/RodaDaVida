/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import TelaInicial from './src/Telas/TelaInicial';
import Cadastro from './src/Telas/Cadastrar';
import Login from './src/Telas/Login';

// const [graduacao, setGraduacao] = useState('Graduacao');

const TabNavegacao = createBottomTabNavigator({
  TelaInicial: {
    screen: TelaInicial,
    navigationOptions: {
      tabBarIcon: ()=> <Icon name="home" size={24} color="blue"></Icon>
    }
  },  
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarIcon: ()=> <Icon name="lock" size={24} color="blue"></Icon>
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      tabBarIcon: ()=> <Icon name="users" size={34} color="blue"></Icon>
    }
  },
        
},
{
  // tabBarComponent: MultiBar,
  tabBarOptions:{
    activeTintColor: 'red',
    showLabel: true,
    // activeBackgroundColor: 'black',
    // inactiveBackgroundColor: 'black',
    inactiveTintColor: 'green',
    style: {
      backgroundColor: '#90b6ea', // TabBar background
  },
    
  }

})

export default createAppContainer(TabNavegacao);