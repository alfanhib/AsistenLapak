import React ,{Component} from 'react'
import { View, Footer, FooterTab, Button, Icon } from 'native-base'

export default class MainFooter extends Component{
    render(){
        return (
            <View>
                <Footer>
                    <FooterTab style={{backgroundColor:'#dd5453'}}>
                        <Button active={this.props.footer.HomeActive} onPress={this.props.footer.HomeScreen}>
                            <Icon style={{color:'#fff'}} name="home"/>
                        </Button>
                        <Button active={this.props.footer.MarketActive} onPress={this.props.footer.MarketScreen}>
                            <Icon style={{color:'#fff'}} name="cart"/>
                        </Button>
                        <Button>
                            <Icon style={{color:'#fff'}} name="settings"/>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}