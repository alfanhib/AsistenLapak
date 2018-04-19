import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header,Title, Content, Text, Footer, FooterTab, Button, Icon, View, Body } from 'native-base';

import CustomFooter from '../../common/Footer'

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Body>
                        <Title>Setting</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>setting</Text>
                </Content>
                <CustomFooter footer={

                    {
                        activeSettings :true,
                        screenHome: ()=>this.props.navigation.navigate('CustomerHome'),
                        screenCart : ()=>this.props.navigation.navigate('CustomerCart')
                    }
                }/>
                
            </Container>
        )
    }
}