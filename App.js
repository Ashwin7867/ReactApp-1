import { StatusBar } from "expo-status-bar";
import React, { Component, ImageBackground } from "react";
import {
  Dimensions,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { material } from "react-native-typography";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BottomTabBar from "react-navigation-selective-tab-bar";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Icon } from "react-native-elements";
/* screens path */
import Login from "./src/components/Auth/Login";
import Profile from "./src/components/DrawerScreens/UserDetails/Profile";
import EditProfile from "./src/components/DrawerScreens/UserDetails/EditProfile";
import About from "./src/components/DrawerScreens/About";
import Help from "./src/components/DrawerScreens/Help";
import PurchaseDome from "./src/components/DrawerScreens/PurchaseDome";
import Settings from "./src/components/DrawerScreens/Settings";
import Subscription from "./src/components/DrawerScreens/Subscription";
import Community from "./src/components/StackScreens/Community";
import Dome from "./src/components/StackScreens/Dome";
import Home from "./src/components/StackScreens/Home";
import Intentions from "./src/components/StackScreens/Intentions";
import Learn from "./src/components/StackScreens/Learn";
import PostSession from "./src/components/StackScreens/PostSession";
import Session from "./src/components/StackScreens/Session";
import SessionPlayer from "./src/components/StackScreens/SessionPlayer";
import Use from "./src/components/StackScreens/Use";
import SideMenu from "./src/components/DrawerNav/sideBar";
import Registration from "./src/components/Auth/Register";
import Welcome from "./src/components/Auth/Welcome";
//import Creative from "./src/components/StackScreens/Creative";
import MusicApp from "./src/components/Common/MusicPlayer";
import Clarity from "./src/components/StackScreens/Clarity";
import PairDome from "./src/components/StackScreens/PairDome";
import Pay from "./src/components/StackScreens/Pay";
import SeassionStart from "./src/components/StackScreens/SeassionStart";
import More from "./src/components/StackScreens/More";
import TermsServices from "./src/components/DrawerScreens/TermsServices";
import StartupScreen from "./src/components/StartupScreen";
import Book from "./src/components/StackScreens/Book";
import DomePerformance from "./src/components/StackScreens/DomePerformance";
import Unlock from "./src/components/StackScreens/Unlock";
import { GetFontSize } from "./src/Utills/commonUtills";
// const HomeScreen = createStackNavigator({
//   Home :  {
//     screen : Home,
//   }
// })

// const DomeScreen = createStackNavigator({
//   Dome : {
//     screen : Dome,
//  }
// })

// const LearnScreen = createStackNavigator({
//   Learn : {
//     screen : Learn,
//   }
// })

// const UseScreen = createStackNavigator({
//   Use : {
//     screen : Use,
// }
// })

// const CommunityScreen = createStackNavigator({
//   Community : {
//     screen : Community,
// },
// })

// const MoreScreen = createStackNavigator({
//   More : {
//     screen : SideMenu
//  }
// })

const RenderIcon = ({ iconName, width, height }) => {
  const images = {
    dome: require("./assets/images/bottom/somadome.png"),
    learn: require("./assets/images/bottom/book.png"),
    use: require("./assets/images/bottom/Meditate.png"),
    connect: require("./assets/images/bottom/Community.png"),
    more: require("./assets/images/bottom/menu.png"),
  };

  if (width == 35) {
    return (
      <View>
        <View
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <Image
            source={require("./assets/images/elipse.png")}
            style={{ bottom: 20, right: 10, width: 55, height: 55 }}
          />
        </View>
        <View style={{ opacity: 1 }}>
          <Image
            style={{
              width,
              height,
              bottom: 10,
              flex: 1,
              width: 35,
              height: "95%",
              resizeMode: "contain",
            }}
            source={images[iconName]}
          />
        </View>
      </View>
    );
  } else {
    return (
      <Image
        style={{
          width,
          height,
          flex: 1,
          width: 30,
          height: "90%",
          resizeMode: "contain",
        }}
        source={images[iconName]}
      />
    );
  }
};

export const bottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Dome: {
      screen: Dome,
      navigationOptions: {
        inactiveTintColor: "white",
        activeTintColor: "#81B247",
        tabBarIcon: ({ tintColor, focused }) => (
          <RenderIcon
            iconName="dome"
            width={focused ? 35 : 25}
            height={focused ? 30 : 20}
          />
        ),
      },
    },
    Learn: {
      screen: Learn,
      navigationOptions: {
        activeTintColor: "white",
        inactiveTintColor: "white",
        tabBarIcon: ({ tintColor, focused }) => (
          <RenderIcon
            iconName="learn"
            width={focused ? 35 : 25}
            height={focused ? 30 : 20}
          />
        ),
      },
    },
    Use: {
      screen: Use,
      navigationOptions: {
        inactiveTintColor: "white",
        tabBarIcon: ({ tintColor, focused }) => (
          <RenderIcon
            iconName="use"
            width={focused ? 35 : 25}
            height={focused ? 30 : 20}
          />
        ),
        headerVisible: true,
      },
    },
    Connect: {
      screen: Community,
      navigationOptions: {
        inactiveTintColor: "white",
        tabBarIcon: ({ tintColor, focused }) => (
          <RenderIcon
            iconName="connect"
            width={focused ? 35 : 25}
            height={focused ? 30 : 20}
          />
        ),
      },
    },
    More: {
      // screen: SideMenu,
      screen: More,
      navigationOptions: {
        inactiveTintColor: "white",
        tabBarIcon: ({ tintColor, focused }) => (
          <RenderIcon
            iconName="more"
            width={focused ? 35 : 25}
            height={focused ? 30 : 20}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    tabBarComponent: (props) => {
      return (
        <BottomTabBar
          {...props}
          display={["Dome", "Learn", "Use", "Connect", "More"]}
          background="grey"
        />
      );
    },
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#fff",
    },
  }
);

// ({ navigation }) => ({
//   headerLeft : ()=> <FontAwesome5 name="bars" color="black" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>
// })

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Stackscreens = createStackNavigator({
  HomeScreen: {
    screen: bottomTabs,
    navigationOptions: { headerShown: false },
  },

  Intentions: { screen: Intentions },
  PostSession: { screen: PostSession },
  Session: { screen: Session },
  SessionPlayer: { screen: SessionPlayer },
  EditProfile: { screen: EditProfile },
  PROFILE: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: (
        <Text style={[material.display1, styles.headerText]}>PROFILE</Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("./assets/images/back.png")}
          />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: "grey", height: 100 },
      headerTintColor: "white",
    }),
  },
  About: { screen: About },
  HELP: {
    screen: Help,
    navigationOptions: ({ navigation }) => ({
      title: (
        <Text style={[material.display1, styles.headerText]}>
          HELP & SUPPORT
        </Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("./assets/images/back.png")}
          />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: "grey", height: 100 },
      headerTintColor: "white",
    }),
  },
  PurchaseDome: {
    screen: PurchaseDome,
    navigationOptions: ({ navigation }) => ({
      title: (
        <Text style={[material.display1, styles.headerText]}>
          PAIR YOUR DOME
        </Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("./assets/images/back.png")}
          />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: "grey" },
      headerTintColor: "white",
    }),

    headerStyle: { backgroundColor: "grey", height: 100 },
    headerTintColor: "white",
  },
  Settings: { screen: Settings },
  Subscription: { screen: Subscription },
  // Creative: { screen: Creative },
  MusicApp: { screen: MusicApp },
  Clarity: {
    screen: Clarity,
    navigationOptions: ({ navigation }) => ({
      title: (
        <Text style={[material.display1, styles.headerText]}>BACK TO LIBRARY</Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("./assets/images/back.png")}
          />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: "grey", height: 100 },
      headerTintColor: "white",
    }),
  },
  PAIRDOME: {
    screen: PairDome,
    navigationOptions: ({ navigation }) => ({
      title: (
        <Text style={[material.display1, styles.headerText]}>
          PAIR YOUR DOME
        </Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("./assets/images/back.png")}
          />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: "grey", height: 100 },
      headerTintColor: "white",
    }),
  },
  Pay: { screen: Pay },
  SeassionStart: { screen: SeassionStart },
  More: { screen: More },
  TermsServices: {
    screen: TermsServices,
    navigationOptions: ({ navigation }) => ({
      title: (
        <Text style={[material.display1, styles.headerText]}>
          TERMS OF SERVICE
        </Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("./assets/images/back.png")}
          />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: "grey", height: 100 },
      headerTintColor: "white",
    }),
  },
  Book: { screen: Book },
  DomePerformance: { screen: DomePerformance },
  Unlock: {
    screen: Unlock,
    navigationOptions: ({ navigation }) => ({
      title: (
        <Text style={[material.display1, styles.headerText]}>UNLOCK MODE:</Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("./assets/images/back.png")}
          />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: "grey", height: 100 },
      headerTintColor: "white",
    }),
  },
});

const Auth = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: { headerShown: false },
  },
  Login: {
    screen: Login,
    navigationOptions: { headerShown: false },
  },
  Registration: {
    screen: Registration,
    navigationOptions: { headerShown: false },
  },
});

const Drawerscreens = createDrawerNavigator(
  {
    Stackscreens: { screen: Stackscreens },
  },
  {
    contentComponent: (props) => <SideMenu {...props} />,
    drawerBackgroundColor: "white",
    drawerPosition: "left",
    drawerWidth: Dimensions.get("window").width * 0.7,
  }
);

const styles = StyleSheet.create({
  headerText: {
    letterSpacing: 1,
    fontSize: GetFontSize(),
    color: "white",
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Startup: StartupScreen,
    AuthStack: Auth,
    AppStack: Drawerscreens,
  })
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
