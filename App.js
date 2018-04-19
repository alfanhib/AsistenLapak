import React from 'react';
import {StackNavigator} from 'react-navigation';

import FormLogin from './App/Form/FormLogin';
import FormSignUp from './App/Form/FormSignUp';
import Home from './App/Dashboard/Home/Main'
import Market from './App/Dashboard/Market/Main'

const App = StackNavigator({
  RouteMain:{
    screen:FormLogin,
    navigationOptions:{
      header: null
    }
  },
  RouteSignUp:{
    screen: FormSignUp,
    navigationOptions:{
      header: null
    }
  },
  RouteHome:{
    screen: Home,
    navigationOptions:{
      header: null
    }
  },
  RouteMarket:{
    screen: Market,
    navigationOptions:{
      header:null
    }
  },
},{
  initialRouteName:'RouteMain',
})

export default App;