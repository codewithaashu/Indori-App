import { StyleSheet,View } from 'react-native'
import React, { useState } from 'react'
import {Searchbar} from "react-native-paper";
import { colors } from '../Constraints';
const SearchComp = ({title}) => {
    const [searchQuery,setSearchQuery] = useState("");
  return (
    <View style={styles.seachContainer}>
      <Searchbar
        placeholder={`Search ${title}`}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={styles.searchBarStyle}
      />
    </View>
  );
}

export default SearchComp

const styles = StyleSheet.create({
  seachContainer: {
    marginHorizontal: 10,
  },
  searchBarStyle: {
    backgroundColor:colors.mutedBackgroundColor, color:colors.headingTextColor
  },
});