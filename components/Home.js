import React from 'react';
import { Text, View, StyleSheet, ProgressBarAndroid } from 'react-native';

import { Card, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const Home = ({ navigation, list }) => {


  return (
    <View style={styles.container}>
      { !list && <ProgressBarAndroid />}
      { list &&
      <ScrollView>

      <View style={{height:40, backgroundColor:'white', marginTop:10, flexDirection:'row', justifyContent:'space-between'}} >
        <Text style={styles.subtitle}>베스트 셀러</Text>
        <Text style={{textAlignVertical:'bottom', paddingBottom:8, paddingRight:8}} onPress={()=>{navigation.navigate("Store")}}>더보기</Text>
      </View>
      <View style={{paddingTop:0}}>
        <ScrollView horizontal={true} backgroundColor="white" style={{paddingTop:0}} >
        {
          list.map((item, i) =>
            (item.id < 8)&&(
            <Card containerStyle={{width:140, height:200, marginLeft:10 ,marginRight:10, marginTop:0}}  key={i}>
              <Card.Image source={{uri: item.image}} onPress={()=>{navigation.navigate("Details", {id:item.id})}}>
              </Card.Image>
              <Card.Title numberOfLines={1} style={{fontSize:12, marginTop:5}}>{item.title}</Card.Title>
            </Card>
            )
          )
        }
        <View style={{justifyContent:'center', marginLeft:20,marginRight:20}}>
          <Icon name="arrow-forward" onPress={()=>{navigation.navigate("Store")}}/>
        </View>
        </ScrollView>
      </View>

      <View style={{height:40, justifyContent:'center', backgroundColor:'white', marginTop:15}}>
        <Text style={styles.subtitle}>한빛 미디어 - 이것이 시리즈</Text>
      </View>
      <View style={{paddingTop:0}}>
        <ScrollView horizontal={true} backgroundColor="white" style={{paddingTop:0}}>
        {
          list.map((item, i) =>
            (item.series=="this")&&(
            <Card containerStyle={{width:140, height:200, marginLeft:10 ,marginRight:10, marginTop:0}}  key={i}>
              <Card.Image source={{uri: item.image}} onPress={()=>{navigation.navigate("Details", {id:item.id})}}>
              </Card.Image>
              <Card.Title numberOfLines={1} style={{fontSize:12, marginTop:5}}>{item.title}</Card.Title>
            </Card>
            )
          )
        }
        </ScrollView>
      </View>

      <View style={{height:40, justifyContent:'center', backgroundColor:'white', marginTop:15}}>
        <Text style={styles.subtitle}>in Action 시리즈</Text>
      </View>
      <View style={{paddingTop:0}}>
        <ScrollView horizontal={true} backgroundColor="white" style={{paddingTop:0}}>
        {
          list.map((item, i) =>
            (item.series=="in action")&&(
            <Card containerStyle={{width:140, height:200, marginLeft:10 ,marginRight:10, marginTop:0}}  key={i}>
              <Card.Image source={{uri: item.image}} onPress={()=>{navigation.navigate("Details", {id:item.id})}}>
              </Card.Image>
              <Card.Title numberOfLines={1} style={{fontSize:12, marginTop:5}}>{item.title}</Card.Title>
            </Card>
            )
          )
        }
        </ScrollView>
      </View>

    </ScrollView>
    }
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, backgroundColor:"white", justifyContent:"center"
  },
  headertitle : {
    textAlign:'center', color:"#ffffff", fontSize:26
  },
  subtitle : {
    fontSize:16, color:"#333333",paddingLeft:12, fontWeight:'bold', textAlignVertical:'center'
  }

})

export default Home;