import React, {Component} from 'react'
import {StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import { Content, Text, View, Header, Container, Form, Item, Icon, Input, Button, Card } from 'native-base'
import axios from 'axios'

const uri = 'https://api.backendless.com/88269424-FF0F-6299-FFAD-98ED78564100/E87E9DE8-BEB5-B6A8-FF2F-758B1D210D00/data'

export default class FormSignUp extends Component{

    state ={
        Username:'',
        validUsername:null,
        UsernameColor:'red',

        Email:'',
        validEmail:null,
        EmailColor:'red',

        Password:'',
        validPass:null,
        PassColor:'red',

        dataUser:{}
    }

    validateUsername(Username){
        const regexs = /^[a-z,A-Z,0-9]+$/
        return regexs.test(Username)
    }

    validateEmail(Email){
        const regexs = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regexs.test(Email);
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

    handleRegister(){
        axios.post(`${uri}/Users`, this.state.dataUser).then(result=>{
            if(result.data){
                this.getUser,
                this.props.navigation.navigate('SignIn')
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
                                    onChangeText={username=>this.setState({dataUser:{...this.state.dataUser , username}})}
                                />
                            </Item>
                            <Item>
                                <Icon name="person" style={styles.icons}/>
                                <Input 
                                    placeholder="Fullname"
                                    onChangeText={name=>this.setState({dataUser:{...this.state.dataUser , name}})}
                                />
                            </Item>
                            <Item last>
                                <Icon name="lock" style={styles.icons}/>
                                <Input
                                    secureTextEntry={true}
                                    placeholder="Password" 
                                    onChangeText={password=>this.setState({dataUser:{...this.state.dataUser, password}})}
                                />
                            </Item>
                            <Item>
                                <Icon name="mail" style={styles.icons}/>
                                <Input 
                                    placeholder="E-mail" 
                                    keyboardType="email-address"
                                    onChangeText=
                                        {email=>this.setState({dataUser:{...this.state.dataUser, email}})}
                                    />
                            </Item>
                            <Item>
                                <Icon name="city" style={styles.icons}/>
                                <Input 
                                    placeholder="City"
                                    onChangeText={city=>this.setState({dataUser:{...this.state.dataUser, city}})}
                                    />
                            </Item>
                            <Item>
                                <Icon name="card" style={styles.icons}/>
                                <Input 
                                    placeholder="ID Card" 
                                    onChangeText={id_card_number=>this.setState({dataUser:{...this.state.dataUser, id_card_number}})}
                                    />
                            </Item>
                            <Item>
                                <Icon name="phone" style={styles.icons}/>
                                <Input 
                                    placeholder="Phone Number" 
                                    onChangeText={mobile_phone=>this.setState({dataUser:{...this.state.dataUser, mobile_phone}})}
                                    />
                            </Item>
                            <Item>
                                <Icon name="code" style={styles.icons}/>
                                <Input 
                                    placeholder="Postal Code" 
                                    onChangeText={postal_code=>this.setState({dataUser:{...this.state.dataUser, postal_code}})}
                                    />
                            </Item>
                            
                            <Button full style={styles.btnSigUp} onPress={()=>this.handleRegister()}><Text>Sign Up</Text></Button>
                            <Button full transparent onPress={()=>this.props.navigation.navigate('SignIn')}><Text>Have an account ? Log In</Text></Button>
                        </Form>
                    </KeyboardAvoidingView>           
                </Content>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    logo:{
        height:150,
        width:300,
        resizeMode:'contain'
    },
    row:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    input:{
        marginTop:50,
        padding:20
    },
    icons:{
        color:'#595959'
    },
    btnSigUp:{
        backgroundColor:"#dd5453",
        marginTop:30  
    },
    error:{
        borderWidth:3,
        backgroundColor:'red'
    }
})