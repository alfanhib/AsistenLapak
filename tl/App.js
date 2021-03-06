import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import CustomerHome from './components/customer/home/Main'
import CustomerCart from './components/customer/cart/Main'
import CustomerSettings from './components/customer/settings/Main'

import FieldHome from './components/field/home/Main'
import FieldCart from './components/field/cart/Main'
import FieldSettings from './components/field/settings/Main'


const App = StackNavigator({
    CustomerHome: {
        screen: CustomerHome
    },
    CustomerCart: {
        screen: CustomerCart
    },
    CustomerSettings: {
        screen: CustomerSettings
    },
    FieldHome: {
        screen: FieldHome
    },
    FieldCart: {
        screen: FieldCart
    },
    FieldSettings: {
        screen: FieldSettings
    },

},
    {
        initialRouteName: 'CustomerHome',
        headerMode: 'none',
        navigationOptions:{
            headerVisible: false
        }
    })

export default App