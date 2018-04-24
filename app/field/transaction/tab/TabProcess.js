import React, { Component } from 'react';
import { Container, Content} from 'native-base';

import Row from '../../../../components/Row'

export default class TabProcess extends Component {
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <Row data = {
                        {
                            title: 'Toko 1d3',
                            address: 'JL DI HOHO purwokerto',
                            date: '11 Januari 2000',
                            time: '12.00',
                            sender: 'JNE',
                            onpress: {
                                view:()=>alert('view'),
                                edit:()=>alert('edit'),
                                delete:()=>alert('delete')
                            }
                        }
                    } />

                </Content>

            </Container>
        )
    }
}