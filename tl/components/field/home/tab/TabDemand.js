import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';

import CustomList from '../../../common/List'

export default class TabDemand extends Component {
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <CustomList list={
                        {
                            title: 'Toko 1 process',
                            address: 'JL DI HOHO purwokerto',
                            onpress: () => alert('jondes ganteng')
                        }
                    } />

                </Content>
            </Container>
        )
    }
}