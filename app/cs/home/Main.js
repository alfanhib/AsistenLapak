import React, { Component } from 'react';
import { StyleSheet,StatusBar } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, View, Card, CardItem, Body, Fab } from 'native-base';

import Footer from '../../../components/Footer'
import Row from '../../../components/Row'

export default class Main extends Component {

    state = {
        stores: [
            {
                title: 'Toko 1',
                address: 'JL DI HOHO purwokerto',
                asistant: 'sssssssssssssssssssssssssssssssssssssss',
                onpress: {
                    view: () => alert('view'),
                    edit: () => alert('edit'),
                    delete: () => alert('delete')
                }
            },
            {
                title: 'Toko 2',
                address: 'JL Kenangan Bandung',
                asistant: 'Jondes',
                onpress: {
                    view: () => alert('view'),
                    edit: () => alert('edit'),
                    delete: () => alert('delete')
                }
            },
            {
                title: 'Toko 2',
                address: 'JL Kenangan Bandung',
                asistant: 'Jondes',
                onpress: {
                    view: () => alert('view'),
                    edit: () => alert('edit'),
                    delete: () => alert('delete')
                }
            },
            {
                title: 'Toko 2',
                address: 'JL Kenangan Bandung',
                asistant: 'Jondes',
                onpress: {
                    view: () => alert('view'),
                    edit: () => alert('edit'),
                    delete: () => alert('delete')
                }
            },
            {
                title: 'Toko 2',
                address: 'JL Kenangan Bandung',
                asistant: 'Jondes',
                onpress: {
                    view: () => alert('view'),
                    edit: () => alert('edit'),
                    delete: () => alert('delete')
                }
            }
        ]
    }

    render() {
        return (
            <Container>
                <Header hasTabs androidStatusBarColor="#B4424B">
                    <Body>
                        <Title>Lapak Saya</Title>
                    </Body>
                </Header>

                <Content>

                    {this.state.stores.map((stores, index) => {
                        return (
                            <Row key={index} data={stores} />
                        )
                    })}

                </Content>

                <Fab style={{ bottom: 60, backgroundColor:'#DD5453' }}
                    onPress={() => alert('fabpressed')}>
                    <Icon name="add" />
                </Fab>

                <Footer data={
                    {
                        activeHome: true,
                        screenTransaction: () => this.props.navigation.navigate('CsTransaction'),
                        screenSettings: () => this.props.navigation.navigate('CsSetting'),
                    }
                } />

            </Container>
        )
    }
}