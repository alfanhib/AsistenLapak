import React, { Component } from 'react'
import { StyleProvider } from 'native-base'
import { StackNavigator } from 'react-navigation'

import SignIn from './app/SignIn'
import SignUp from './app/SignUp'

// import Loader from './app/Loader'

import CsHome from './app/cs/home/Main'
import CsHomeAddStore from './app/cs/home/AddStore'
import CsTransaction from './app/cs/transaction/Main'
import CsTransactionAdd from './app/cs/transaction/AddTransaction'
import CsTransactionAddPassing from './app/cs/transaction/AddTransactionPassing'
import CsSettings from './app/cs/settings/Main'

import FieldHome from './app/field/home/Main'
import FieldHomeDemandView from './app/field/home/DemandView'
import FieldHomeDemandViewPassing from './app/field/home/DemandViewPassing'
import FieldHomeActiveStore from './app/field/home/ActiveAddStore'
import FieldHomeActiveStoreProduct from './app/field/home/ActiveAddStoreProduct'
import FieldTransaction from './app/field/transaction/Main'
import FieldSettings from './app/field/settings/Main'

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';


const App = StackNavigator({
    // Loader : {
    //     screen :Loader
    // },
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    },
    CsHome: {
        screen: CsHome
    },
    CsHomeAddStore : {
        screen : CsHomeAddStore
    },
    CsTransaction: {
        screen: CsTransaction
    },
    CsTransactionAdd: {
        screen: CsTransactionAdd
    },
    CsTransactionAddPassing: {
        screen: CsTransactionAddPassing
    },
    CsSettings: {
        screen: CsSettings
    },
    FieldHome: {
        screen: FieldHome
    },
    FieldHomeDemandView: {
        screen: FieldHomeDemandView
    },
    FieldHomeDemandViewPassing: {
        screen: FieldHomeDemandViewPassing
    },
    FieldHomeActiveStore :{
        screen : FieldHomeActiveStore
    },
    FieldHomeActiveStoreProduct:{
        screen : FieldHomeActiveStoreProduct
    },
    FieldTransaction: {
        screen: FieldTransaction
    },
    FieldSettings: {
        screen: FieldSettings
    },

},
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    })

export default () => (
    <StyleProvider style={getTheme(material)}>
        <App />
    </StyleProvider>
)