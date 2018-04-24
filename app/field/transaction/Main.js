import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container,TabHeading, Header, Title, Content, Badge, Tab, Tabs, ScrollableTab, Text, Button, Icon, View, list, listItem, Body } from 'native-base';

import { TabSend, TabProcess, TabFailed, TabSuccess } from './tab/Main'
import Footer from '../../../components/Footer'


export default class Main extends Component {

    state = {
        notification:{
            transaction: {
                send : 1,
                process : 9,
                success : 3,
                failed :3
            }
        }
    }

    render() {
        return (
            <Container>
                <Header hasTabs androidStatusBarColor="#B4424B">
                    <Body>
                        <Title>Transaksi</Title>
                    </Body>
                </Header>
                <Tabs locked={true} renderTabBar={() => <ScrollableTab />}>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Permintaan Kirim</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.badgeText}>{this.state.notification.transaction.send}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabSend screen={{
                            view:()=>this.props.navigation.navigate('FieldSettings')
                        }} />
                    </Tab>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Proses</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.badgeText}>{this.state.notification.transaction.process}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabProcess />
                    </Tab>
                    
                    <Tab heading={(
                        <TabHeading>
                            <Text>Gagal</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.badgeText}>{this.state.notification.transaction.failed}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabFailed />
                    </Tab>

                    <Tab heading={(
                        <TabHeading>
                            <Text>Selesai</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.badgeText}>{this.state.notification.transaction.success}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabSuccess />
                    </Tab>
                </Tabs>

                <Footer data={
                    {
                        activeTransaction: true,
                        screenHome: () => this.props.navigation.navigate('FieldHome'),
                        screenSettings: () => this.props.navigation.navigate('FieldSettings')
                    }
                } />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor:'white'
    },
    badgeText :{
        color:'#DD5453'
    }
})