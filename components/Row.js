import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Body, SwipeRow, Button, Icon, Container } from 'native-base';

export default class CRow extends Component {
    render() {
        return (
            <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-160}
                swipeToOpenPercent={70}
                body={
                    <View style={{ flexDirection: 'row', padding: 15 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ maxWidth: 50, height: 50 }}
                                source={require('../assets/images/market.png')}
                            />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.rowHeader}>{this.props.data.title}</Text>
                            <Text style={styles.rowContent}>{this.props.data.address}</Text>
                            {this.props.data.asistant !== undefined ? <Text style={styles.rowDate}>Asisten Lapangan : {this.props.data.asistant}</Text> : null}
                            {this.props.data.date !== undefined ? <Text style={styles.rowDate}>{this.props.data.date}</Text> : null}
                        </View>

                        {this.props.data.time !== undefined && this.props.data.sender !== undefined ? (
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginTop: 5 }}>{this.props.data.time}</Text>
                                <Text style={{ marginTop: 5 }}>{this.props.data.sender}</Text>
                            </View>
                        ) : null}



                    </View>
                }
                disableRightSwipe={true}
                disableLeftSwipe={this.props.data.onpress == undefined ? true : false}
                right={
                    this.props.data.onpress == undefined ? null : (
                        <Container style={{ flex: 1, flexDirection: 'row' }}>
                            {this.props.data.onpress.view !== undefined ? (
                                <Button onPress={this.props.data.onpress.view} full primary style={{ flex: 1, height: 'auto' }}>
                                    <Icon active name="eye" />
                                </Button>) : null}

                            {this.props.data.onpress.edit !== undefined ? (
                                <Button onPress={this.props.data.onpress.edit} full success style={{ flex: 1, height: 'auto' }}>
                                    <Icon active name="create" />
                                </Button>) : null}

                            {this.props.data.onpress.delete !== undefined ? (
                                <Button onPress={this.props.data.onpress.delete} full danger style={{ flex: 1, height: 'auto' }}>
                                    <Icon active name="trash" />
                                </Button>) : null}
                        </Container>
                    )
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    rowHeader: {
        fontSize: 20,
        marginBottom: 5,
        color: '#0c0c0c'
    },
    rowContent: {
        color: '#424242'
    },
    rowDate: {
        marginTop: 5
    }
})