import React from 'react';
import { View, ProgressBarAndroid } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'


const Store = ({ navigation, list }) => {

  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      { !list && <ProgressBarAndroid />}
      { list &&
      <ScrollView contentContainerStyle={
        { flexGrow:1, alignItems:"center", justifyContent:"center"}
      }>
        {
          list.map((item, i) => (
            <ListItem topDivider containerStyle={{width:"100%", height:150}} key={i} onPress={()=>{navigation.navigate("Details", {id:item.id})}}>
              <Avatar source={{uri : item.image}} size="large" avatarStyle={{resizeMode:'contain'}} />
              <ListItem.Content>
                <ListItem.Title style={{fontSize:16, fontWeight:'bold', marginBottom:5}}>{item.title}</ListItem.Title>
                <ListItem.Subtitle style={{color:"#6699CC", marginBottom:3}}>{item.subtitle}</ListItem.Subtitle>
                <ListItem.Subtitle style={{fontSize:12, marginBottom:5}}>{item.author}  |  {item.publisher}</ListItem.Subtitle>
                <ListItem.Subtitle style={{fontSize:15, color:"tomato", fontWeight:'bold'}}>{item.price}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
      }
    </View>
  )
}
export default Store;