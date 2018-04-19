import React, {Component} from 'react'
import { View, Card, CardItem, Body, Text } from 'native-base'
import {} from 'react-native'

export default class CustomCard extends Component{
    render(){
        return(
            <View>
                <Card>
                    <CardItem button={true} onPress={this.props.CustomCard.onpress}>
                        <Body>
                            <Text>{this.props.CustomCard.title}</Text>
                            <Text>{this.props.CustomCard.address}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        )
    }
}
