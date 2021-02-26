import React, { useEffect, useCallback, useState } from 'react';
import { Text, View, ProgressBarAndroid } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'

import { ScrollView } from 'react-native-gesture-handler'

import api from '../api/list'

const Details = ({ route, navigation }) => {

  console.log("--detail--");
  console.log(route.params);

  const { id } = route.params;

  const [item, setItem] = useState(null);

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);
  console.log("--tasks--");
  console.log(tasks);

  const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedTask--");
  console.log(isExistedTask);

  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    console.log(result.data);

    setTimeout(()=>{
      setItem(result.data);
    }, 300)
  }, [])

  useEffect(()=>{
    getDetails();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        { !item && <ProgressBarAndroid />}
        { item &&
        <Card containerStyle={{width:"100%", height:"100%", marginTop:0}}>
          <Card.Image source={{uri: item.image}} style={{height:250, resizeMode:'contain'} }>
          </Card.Image>
          <Card.Divider/>
          <Card.Title style={{fontSize:22, textAlign:'left', marginBottom:10}}>{item.title}</Card.Title>
          <Card.Title style={{fontSize:15, textAlign:'left', marginBottom:5}}>{item.subtitle}</Card.Title>
          <Text style={{fontSize:14, textAlign:'left', marginBottom:10}}>{item.author}</Text>
          {
            isExistedTask 
              ?
              <Button
                onPress={()=>{dispatch(removeTask(id))}}
                icon={<Icon name='close-circle' type='ionicon' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
                title='  내 서재에서 삭제' 
              /> 
              :
              <Button
                onPress={()=>{dispatch(addTask(item))}}
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
      }
    </View>
  )
}
export default Details;
