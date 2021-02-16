// import React from 'react';
// import { Text, View, Button } from 'react-native';

// // 함수의 리턴 값이 JSX.Element면
// // React 컴포넌트가 된다.

// // JSX를 쓰려면 import React from 'react';
// const Home = ({ navigation }) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Home</Text>
//       <Button 
//         title="Go to Details"
//         onPress={()=>{navigation.navigate("Details", {id:1})}}
//       />
//     </View>
//   )
// }
// export default Home;
import React, { useState, useCallback } from 'react';
import { Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Home = ({navigation}) => {

  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="Type Here..."
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>
    </View>
  )
}

export default Home;