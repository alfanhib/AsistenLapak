import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';

import Row from '../../../../components/Row'

export default class TabDemand extends Component {
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <Row data={
                        {
                            title: 'Toko 1 process',
                            address: 'JL DI HOHO purwokerto',
                            asistant : 'daffa',
                            onpress: {
                                view:this.props.screen.view
                            }
                        }
                    } />

                </Content>
            </Container>
        )
    }
}