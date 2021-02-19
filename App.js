
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Store from './components/Store';
import List from './components/Search';
import Actions from './components/Actions';
import Details from './components/Details'
import { LISTDATA } from './shared/list'

import { SafeAreaProvider } from 'react-native-safe-area-context';

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import Search from './components/Search';

const store = createStore(rootReducer);

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const StoreStack = createStackNavigator();
const ListStack = createStackNavigator();
const ActionStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"📚 DAEWOO BOOK", headerTitleAlign:"center", headerStyle:{backgroundColor:"#405AA9", height:60}, headerTitleStyle:{color:"#ffffff"}}} />
      <StoreStack.Screen name="Store" component={Store} options={{title:"STORE", headerTitleAlign:"center", headerStyle:{backgroundColor:"#405AA9", height:60}, headerTitleStyle:{color:"#ffffff"}, headerTintColor:"white"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Book info", headerTitleAlign:"left"}} />
    </HomeStack.Navigator>
  )
}

const StoreStackScreen = () => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen name="Store" component={Store} options={{title:"STORE", headerTitleAlign:"center", headerStyle:{backgroundColor:"#405AA9", height:60}, headerTitleStyle:{color:"#ffffff"}}} />
      <StoreStack.Screen name="Details" component={Details} options={{title:"Book info", headerTitleAlign:"left"}} />
    </StoreStack.Navigator>
  )
}

const SearchStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Search" component={Search} options={{title:"SEARCH", headerTitleAlign:"center", headerStyle:{backgroundColor:"#405AA9", height:60}, headerTitleStyle:{color:"#ffffff"}}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"Book info", headerTitleAlign:"left"}} />
    </ListStack.Navigator>
  )
}

const ActionStackScreen = () => {
  return (
    <ActionStack.Navigator>
      <ActionStack.Screen name="Actions" component={Actions} options={{title:"MY LIBRARY", headerTitleAlign:"center", headerStyle:{backgroundColor:"#405AA9", height:60}, headerTitleStyle:{color:"#ffffff"}}} />
      <ActionStack.Screen name="Details" component={Details} options={{title:"Book info", headerTitleAlign:"left"}} />
    </ActionStack.Navigator>
  )
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case '홈':
        iconName = focused
          ? 'home'
          : 'home-outline';
         break;
      case '서점':
        iconName = focused
          ? 'book'
          : 'book-outline';
        break;
      case '검색':
        iconName = focused
          ? 'search'
          : 'search-outline';
        break;
      case '내서재':
        iconName = focused
          ? 'library'
          : 'library-outline';
        break;

    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  }
})


const tabBarOptions={
  activeTintColor : '#405AA9',
  inactiveTintColor : '#000000',
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="홈" component={HomeStackScreen} />
            <Tab.Screen name="서점" component={StoreStackScreen} />
            <Tab.Screen name="검색" component={SearchStackScreen} />
            <Tab.Screen name="내서재" component={ActionStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}