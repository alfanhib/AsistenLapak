import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header,Title, Content, Text, FooterTab, Button, Icon, View, Body } from 'native-base';

import Footer from '../../../components/Footer'

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs androidStatusBarColor="#B4424B">
                    <Body>
                        <Title>Setting</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>setting</Text>
                </Content>
                <Footer data={

                    {
                        activeSettings :true,
                        screenHome: ()=>this.props.navigation.navigate('CsHome'),
                        screenTransaction : ()=>this.props.navigation.navigate('CsTransaction')
                    }
                }/>
                
            </Container>
        )
    }
}