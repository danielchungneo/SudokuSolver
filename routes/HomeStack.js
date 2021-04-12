import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import MainUI from "../screens/MainUI";
import InputPad from "../screens/InputPad";
import Board from "../components/Board"

const screens = {
  Home: {
    screen: Home,
  },

  MainUI: {
    screen: MainUI,
  },
  Board: {
    screen: Board
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
