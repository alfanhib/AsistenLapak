import React, { Component } from 'react';
import { View, Footer, FooterTab, Button, Icon, StyleProvider } from 'native-base'

export default class CFooter extends Component {
    render() {
        return (
                <View>
                    <Footer>
                        <FooterTab style={{backgroundColor:'#dd5453'}}>
                            <Button active={this.props.data.activeHome} onPress={this.props.data.screenHome}>
                                <Icon name="home" />
                            </Button>
                            <Button active={this.props.data.activeTransaction} onPress={this.props.data.screenTransaction}>
                                <Icon name="cart" />
                            </Button>
                            <Button active={this.props.data.activeSettings} onPress={this.props.data.screenSettings}>
                                <Icon active name="settings" />
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
            // </StyleProvider>
        )
    }
}