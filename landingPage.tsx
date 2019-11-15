import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

class Welcome extends Component<any, any> {
  componentDidMount(){
    // Start counting when the page is loaded
    setTimeout(()=>{
      this.props.navigation.navigate("Home");
    }, 3000);
}


  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={() => 
         this.props.navigation.navigate("Home")} >
          <Image 
            source={require('../assets/images/NGaugeLogo.png')} 
            style={styles.logo}
          />
        </TouchableOpacity>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  logo: {
    height: 200,
    width:200,
    marginTop:'40%',
  },
});

export default Welcome;