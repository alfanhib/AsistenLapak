import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Tab, Tabs, Text, Body, Badge, TabHeading } from 'native-base';

import { TabProcess, TabFailed, TabSuccess } from './tab/Main'
import MainFooter from '../Component/Footer'


export default class Main extends Component {

    state = {
        notification : {
            cart :{
                process : 92,
                success : 23,
                failed : 1
            }
        }
    }

    render() {
        return (
            <Container>
                <Tabs locked={true} initialPage={0}>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Proses</Text>
                            <Badge danger>
                                <Text>{this.state.notification.cart.process}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabProcess />
                    </Tab>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Sukses</Text>
                            <Badge danger>
                                <Text>{this.state.notification.cart.success}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabSuccess />
                    </Tab>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Gagal</Text>
                            <Badge danger>
                                <Text>{this.state.notification.cart.failed}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabFailed />
                    </Tab>
                </Tabs>

                <MainFooter footer={
                    {
                        
                        MarketActive: true,
                        HomeScreen: ()=> this.props.navigation.navigate('RouteHome'),
                    }
                } />
            </Container>
        )
    }
}