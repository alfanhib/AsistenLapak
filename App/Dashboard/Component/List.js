import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Body,SwipeRow,Button,Icon,Container } from 'native-base';

export default class List extends Component {
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
                                source={require('../../images/market.png')}
                            />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.listHeader}>{this.props.list.title}</Text>
                            <Text style={styles.listContent}>{this.props.list.address}</Text>
                            <Text style={styles.listDate}>{this.props.list.date}</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 5 }}>{this.props.list.time}</Text>
                            <Text style={{ marginTop: 5 }}>{this.props.list.sender}</Text>
                        </View>

                    </View>
                }
                disableRightSwipe={true}
                disableLeftSwipe={this.props.list.onpress == undefined ? true : false}
                right={
                    this.props.list.onpress == undefined ? null : (
                        <Container style={{ flex: 1, flexDirection: 'row' }}>
                        {this.props.list.onpress.view !== undefined ?( 
                        <Button onPress={this.props.list.onpress.view} full primary style={{ flex: 1, height: 'auto' }}>
                            <Icon active name="eye" />
                        </Button>) : null}

                        {this.props.list.onpress.edit !== undefined ?( 
                        <Button onPress={this.props.list.onpress.edit} full success style={{ flex: 1, height: 'auto' }}>
                            <Icon active name="create" />
                        </Button>) : null}

                        {this.props.list.onpress.delete !== undefined ?( 
                        <Button onPress={this.props.list.onpress.delete} full danger style={{ flex: 1, height: 'auto' }}>
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
    listHeader: {
        fontSize: 20,
        marginBottom: 5,
        color: '#0c0c0c'
    },
    listContent: {
        color: '#424242'
    },
    listDate: {
        marginTop: 5
    }
})