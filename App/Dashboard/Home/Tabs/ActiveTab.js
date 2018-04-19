import React, {Component} from 'react';
import { Container, Content, Fab, Icon } from 'native-base';

import List from '../../Component/List'

export default class ActiveTab extends Component{
    
    state ={
        request:[
            {
                title: 'Toko 1',
                address :'Jl.Danau Ranau IV Malang',
                date: '14 Mei 2018',
                sender :'JNE',
                time: '09.00',
                onpress: {
                    view:()=>alert('view'),
                    edit:()=>alert('edit'),
                    delete:()=>alert('delete')
                }

            },{
                title: 'Toko 2',
                address :'Jl.Danau Ranau I Malang',
                date: '24 Mei 2018',
                sender :'JTE',
                time: '19.00',
                onpress: {
                    view:()=>alert('view'),
                    edit:()=>alert('edit'),
                    delete:()=>alert('delete')
                }
            }
            
        ]
    }

    render(){
        return(
            <Container>
                <Content>
                    {this.state.request.map((stores,index)=>{
                        return(
                            <List key={index} list={stores} />
                        )
                    })}
                </Content>
                <Fab onPress={() => alert('fabpressed')}>
                    <Icon name="add" />
                </Fab>
            </Container>
        )
    }
}


