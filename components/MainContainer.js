import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './HomeContainer';
import Store from './StoreContainer';
import Search from './Search';
import Tasks from './Tasks';
import Details from './Details';
import HWTest from './HWTest'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const StoreStack = createStackNavigator();
const ListStack = createStackNavigator();
const TaskStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"🐻 BEAR BOOK", headerTitleAlign:"center", headerStyle:{backgroundColor:"#405AA9", height:60}, headerTitleStyle:{color:"#ffffff"}}} />
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

const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen name="Tasks" component={Tasks} options={{title:"MY LIBRARY", headerTitleAlign:"center", headerStyle:{backgroundColor:"#405AA9", height:60}, headerTitleStyle:{color:"#ffffff"}}} />
      <TaskStack.Screen name="Details" component={Details} options={{title:"Book info", headerTitleAlign:"left"}} />
    </TaskStack.Navigator>
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
      case 'HWTest':
        iconName = focused
          ? 'hardware-chip'
          : 'hardware-chip-outline'; 
        break; 
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
})


const tabBarOptions={
  activeTintColor : '#405AA9',
  inactiveTintColor : '#000000',
}

export default function Main() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("-- main is mounted --")
    dispatch({type:"FETCH_TASKS"})
  }, [])

  const alert = useSelector(state => state.alert)
  console.log('-- alert --')
  console.log(alert)

  if(alert.isShow) {
    Alert.alert(
      "Errors",
      alert.msg,
      [
        { text : "OK", onPress: () => dispatch({type:"CLOSE_ALERT"}) }
      ],
      { cancelable : false }
    );
  }

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="홈" component={HomeStackScreen} />
            <Tab.Screen name="서점" component={StoreStackScreen} />
            <Tab.Screen name="검색" component={SearchStackScreen} />
            <Tab.Screen name="내서재" component={TaskStackScreen} />
            <Tab.Screen name="HWTest" component={HWTest} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}