import React, {Component} from 'react'
import {Text} from 'react-native'
import { Container, Header, Title, Tabs, Tab, Body, TabHeading, Badge } from 'native-base'


import {ActiveTab, AkusisiTab} from './Tabs/Main'
import MainFooter from '../Component/Footer'

export default class Main extends Component{
    
    state= {
        notification :{
            request:{
                Aktif : 12,
                Akusisi: 33
            }
        }
    }

    render(){
        return (
            <Container>
                <Tabs locked={true}>
                    <Tab heading={(
                        <TabHeading >
                            <Text>Aktif</Text>
                            <Badge danger>
                                <Text>{this.state.notification.request.Aktif}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <ActiveTab/>
                    </Tab>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Permintaan Akusisi</Text>
                            <Badge danger>
                                <Text>{this.state.notification.request.Akusisi}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <AkusisiTab/>
                    </Tab>
                </Tabs>

                <MainFooter footer={
                    {
                        HomeActive: true,
                        MarketScreen: ()=> this.props.navigation.navigate('RouteMarket'),
                    }
                } />

            </Container>
        )
    }
}