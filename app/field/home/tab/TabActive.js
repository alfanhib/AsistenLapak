import React, { Component } from 'react';
import { Container, Content, Fab, Icon } from 'native-base';

import Row from '../../../../components/Row'

export default class TabActive extends Component {
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <Row data={
                        {
                            title: 'Toko 1 process',
                            asistant : 'jondes',
                            address: 'JL DI HOHO purwokerto'
                        }
                    } />
                    <Row data={
                        {
                            title: 'Toko 1 process',
                            asistant : 'jondes',
                            address: 'JL DI HOHO purwokerto'
                        }
                    } />
                    <Row data={
                        {
                            title: 'Toko 1 process',
                            asistant : 'jondes',
                            address: 'JL DI HOHO purwokerto'
                        }
                    } />
                    <Row data={
                        {
                            title: 'Toko 1 process',
                            asistant : 'jondes',
                            address: 'JL DI HOHO purwokerto'
                        }
                    } />

                </Content>

                <Fab style={{backgroundColor:'#DD5453'}} onPress={this.props.fab}>
                    <Icon name="add" />
                </Fab>

            </Container>
        )
    }
}