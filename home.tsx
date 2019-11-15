import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import axios from "axios";


interface IHomeProps {
    navigation: any,
}

interface IHomeStates {
    list: { employee_age: string, employee_name: string, employee_salary: string, id: string, profile_image: string }[]

}

export default class Home extends Component<IHomeProps, IHomeStates> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get("http://dummy.restapiexample.com/api/v1/employees").then((res) => {
            console.log(res);
            debugger
            this.setState({ list: res.data })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <List>
                        {this.state.list.map((item) => {
                            debugger
                            return <ListItem key={item.id} avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'Image URL' }} />
                                </Left>
                                <Body>
                                    <Text>{item.employee_name}</Text>
                                    <Text note>{item.employee_salary}</Text>
                                </Body>
                                <Right>
                                    <Text note>{"Details"}</Text>
                                </Right>
                            </ListItem>
                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}