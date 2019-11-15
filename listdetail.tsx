import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

interface IListDetailProps {
    navigation: any
}

interface IListDetailStates {

}

export default class ListDetail extends Component<IListDetailProps, IListDetailStates> {
    constructor(props: IListDetailProps) {
        super(props);
        this.state = {
        }

    }

    login = () => {
        this.props.navigation.navigate("Home");
    }

    render() {
        return (
            <View>
                <Text>login</Text>
                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />

<Button
  title="Outline button"
  type="outline"
  onPress={this.login}
/>
            </View>
        );
    }
}