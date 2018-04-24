import React, {Component} from 'react';
import {StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import {Container, Content, Text, Item, Form, Input, Icon, Button, Header} from 'native-base';
import axios from 'axios'

const uri = 'https://api.backendless.com/88269424-FF0F-6299-FFAD-98ED78564100/E87E9DE8-BEB5-B6A8-FF2F-758B1D210D00/data'

export default class SignIn extends Component{

    state ={
        Username:'',
        validUsername:null,
        UsernameColor:'red',

        Password:'',
        validPass:null,
        PassColor:'red',
    }

    validateUsername(Username){
        const regexs = /^[a-z,A-Z,0-9]+$/
        return regexs.test(Username)
    }

    validatePassword(Password){
        const regexs = /^[a-z,A-Z,0-9]+$/
        return regexs.test(Password)

        if(Password.lenght >= 6 || Password >= 16)
        {
            return true
        }else{
            return false
        }
    }

    getUser(){
        axios.get(`${uri}/Users`).then(result=>{
            dataUser: result.data
        })
    }

    handeLogin(){
        axios.post(`${uri}/Users`, this.state.dataUser).then(result=>{
            if(result.data){
                this.getUser,
                this.props.navigation.navigate('SignIn')
            }else{
                alert("Gagal")
            }
        })
    }

    render(){
        return(
            <Container>
                <Header androidStatusBarColor="#B4424B" />
                <Content>
                    <View style={styles.row}>
                        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                    </View>
                    <KeyboardAvoidingView>
                        <Form style={styles.input}>
                            <Item>
                                <Icon name="person" style={styles.icons}/>
                                <Input 
                                    placeholder="Username"
                                    onSubmitEditing={()=>this.passwordInput.focus()}
                                    onChangeText={username=>this.setState({dataUser:{...this.state.dataUser , username}})}
                                />
                                <Icon name={this.state.validUsername} style={{color:this.state.UsernameColor}}/>
                            </Item>
                            <Item last>
                                <Icon name="lock" style={styles.icons}/>
                                <Input 
                                    placeholder="Password" 
                                    secureTextEntry
                                    onChangeText=
                                        {
                                            password=>this.setState({dataUser:{...this.state.dataUser, password}})
                                        }
                                    ref={(input)=>this.passwordInput = input}
                                    />
                                <Icon name={this.state.validPass} style={{color:this.state.PassColor}}/>
                            </Item>
                            <Button full style={styles.btnLogin} onPress={()=>this.handeLogin()}><Text style={{color:'#fff'}}>Login CS</Text></Button>
                            <Button full style={styles.btnLogin} onPress={()=>this.props.navigation.navigate('FieldHome')}><Text style={{color:'#fff'}}>Login Lap</Text></Button>
                            <Button transparent full onPress={()=>this.props.navigation.navigate('SignUp')}><Text>Dont account? Register</Text></Button>
                        </Form>   
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30
    },
    input:{
        marginTop:50,
        padding:20
    },
    icons:{
        color:"#595959"
    },
    logo:{
        height: 150,
        resizeMode:'contain',
        width:300
    },
    btnLogin:{
        backgroundColor:"#dd5453",
        marginTop:30
    },
    error:{
        borderWidth:2,
        borderColor: 'red'
    }
})