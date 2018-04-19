import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native'
import { Container, View, Text, Form, Input, Content, Label, Item, Header, Button } from 'native-base'

export default class Account extends Component{
    render(){
        return(
            <Container style={styles.cont}>
                <Content>
                    <Header>
                        <View>
                            <Text>
                                Edit Profile
                            </Text>
                        </View>
                    </Header>
                    <View style={styles.row}>
                        <Image source={require('../../image/avatar.png')} style={styles.logo}/>
                    </View>
                    <Form style={styles.form}>
                        <Label style={styles.lblForm}>Name :</Label>
                        <Item style={styles.itmUser}>
                            <Input placeholder="Alfan Hibban Intiyas"/>
                        </Item>
                        <Label style={styles.lblForm}>Number Phone :</Label>
                        <Item style={styles.itmUser}>
                            <Input placeholder="081335671179"/>
                        </Item>
                        <Label style={styles.lblForm}>Address :</Label>
                        <Item style={styles.itmUser}>
                            <Input placeholder="Jl. Danau Ranau IV G1C5 Sawojajar"/>
                        </Item>
                        <Button success full style={styles.btnSave}>
                            <Text>
                                Save
                            </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor:'#68cce8'
    },
    logo:{
        height:200,
        width:200
    },
    row:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30
    },
    form:{
        padding:20
    },
    itmUser:{
        padding:5,
    },
    lblForm:{
        marginTop:10,
        padding:5,
        fontSize:20,
        color:'white'
    },
    btnSave:{
        
    }
})