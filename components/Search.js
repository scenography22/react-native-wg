import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Search = ({navigation}) => {

  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="검색어를 입력해 주세요."
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>
    </View>
  )
}

export default Search;