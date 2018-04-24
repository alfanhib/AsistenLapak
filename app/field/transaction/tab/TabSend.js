import React, { Component } from 'react'
import { Text, StyleSheet,SectionList } from 'react-native'
import { Container, Content, Header, SwipeRow, View, Icon, Button } from 'native-base'

import Row from '../../../../components/Row'

export default class TabSend extends Component {

    state = {
        section: [
            {
                title: '21 Maret 2018',
                data: [
                    {
                        title: 'Toko 13',
                        address: 'JL DI HOHO purwokerto',
                        date: '11 Januari 2000',
                        time: '12.00',
                        sender: 'JNE',
                    },
                    {
                        title: 'Toko 23',
                        address: 'JL DI HOHO Banjarnegara',
                        date: '11 Januari 2018',
                        time: '12.00',
                        sender: 'JNE',
                    }
                ]
            },
            {
                title: '23 Maret 2018',
                data: [
                    {
                        title: 'Toko 13',
                        address: 'JL DI HOHO purwokerto',
                        date: '11 Januari 2000',
                        time: '12.00',
                        sender: 'JNE',
                    },
                    {
                        title: 'Toko 23',
                        address: 'JL DI HOHO Banjarnegara',
                        date: '11 Januari 2018',
                        time: '12.00',
                        sender: 'JNE',
                    }
                ]
            }
        ]
    }

    render() {
        console.log(this.props.screen.view)
        return (
            <Container>
                <Content>

                    <SectionList
                        renderItem={({ item, index, section }) => (
                            <Row data={
                                {
                                    title: item.title,
                                    address: item.address,
                                    date: item.date,
                                    time: item.time,
                                    sender: item.sender
                                    // onpress: {
                                    //     view: this.props.screen.view,
                                    //     edit: () => alert('edit'),
                                    //     delete: () => alert('delete')
                                    // }
                                }
                            } />
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.deadline}>Batas Akhir, {title}</Text>
                        )}
                        sections={this.state.section}
                        keyExtractor={(item, index) => item + index} 
                    />
                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    deadline: {
        textAlign: 'center',
        padding: 5,
        color: 'black',
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        marginBottom: 5
    }
})