import { HeaderBackground } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Button } from 'react-native';

const Header = ({ }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start"
    }}>
      <Text style={{backgroundColor:"#405AA9", color:"#ffffff", fontSize:20 }}>헤더</Text>
    </View>
  )
}
export default Header;