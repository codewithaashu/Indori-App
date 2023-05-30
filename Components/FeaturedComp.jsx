import {Dimensions, FlatList, LogBox, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {colors} from '../Constraints';
import {getDimensions} from '../Constraints';
import FeaturedCard from './FeaturedCard';
import Styles from '../Styles';
import { getNews } from '../Redux/Action';
import {useSelector} from "react-redux"
import { ActivityIndicator } from 'react-native-paper';
const FeaturedComp = () => {
  useEffect(()=>{
    getNews("general");
  },[])
  const globalState = useSelector((state)=>state.news)
  const {loading,news} = globalState;
  let featuredData=[];
  if(news){
    for(let i =0;i<10;i++){
      if(news[i]?.urlToImage){
        featuredData.push(news[i]);
      }
    }
    featuredData = featuredData.slice(0,5);
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={Styles.headingText}>Featured</Text>
      </View>
        {loading ? (
          <ActivityIndicator
            animating={true}
            color="tomato"
            size={35}
            style={{paddingVertical:20}}
          />
        ) : (
          <FlatList
            data={featuredData}
            renderItem={({item}) => (
              <FeaturedCard
                imgURL={item.urlToImage}
                heading={item.title}
                publishedDate={item.publishedAt}
                url={item.url}
              />
            )}
            keyExtractor={(curr, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
  );
};

export default FeaturedComp;

const styles = StyleSheet.create({
  headingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});
