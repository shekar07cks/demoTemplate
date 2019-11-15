import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from "./src/pages/landingPage";
import Home from "./src/pages/home";
import ListDetail from "./src/pages/listdetail";

const Navigation = createStackNavigator({
  LandingPage: {
    screen: LandingPage,
    navigationOptions: {
      header: null // Will hide header for HomeScreen
    }
  },
  ListDetail: {
    screen: ListDetail,
    navigationOptions: {
      header: null // Will hide header for HomeScreen
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null // Will hide header for HomeScreen
    }
  }
}, { initialRouteName: "LandingPage" });

const AppNavigator = createAppContainer(Navigation);

export default class App extends React.Component {

  render() {
    return <AppNavigator />
  }
}



