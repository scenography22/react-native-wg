import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../redux/actions'
import { removeAction } from '../redux/actions'

import { LISTDATA } from '../shared/list'
import { ScrollView } from 'react-native-gesture-handler'

const Details = ({ route, navigation }) => {

  console.log("--detail--");
  console.log(route.params);

  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  console.log("--actions--");
  console.log(actions);

  const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedAction--");
  console.log(isExistedAction);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card containerStyle={{width:"100%", height:"100%", marginTop:0}}>
        <Card.Image source={{uri: item.image}} style={{height:250, resizeMode:'contain'} }>
        </Card.Image>
        <Card.Divider/>
        <Card.Title style={{fontSize:22, textAlign:'left', marginBottom:10}}>{item.title}</Card.Title>
        <Card.Title style={{fontSize:15, textAlign:'left', marginBottom:5}}>{item.subtitle}</Card.Title>
        <Text style={{fontSize:14, textAlign:'left', marginBottom:10}}>{item.author}</Text>
        {
          isExistedAction 
            ?
            <Button
              onPress={()=>{dispatch(removeAction(id))}}
              icon={<Icon name='close-circle' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
              title='  내 서재에서 삭제' 
            /> 
            :
            <Button
              onPress={()=>{dispatch(addAction(item))}}
              icon={<Icon name='add-circle' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"#405AA9"}}
              title='  내 서재에 추가' 
            />    
        }
        <Card.Divider/>
        <Text style={{marginBottom:5}}>책 소개</Text>
        <ScrollView style={{maxHeight:80,marginBottom: 10}}>
          <Text>
            {item.description}
          </Text>
        </ScrollView>
      </Card>
    </View>
  )
}
export default Details;
