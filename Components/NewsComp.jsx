import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {colors} from '../Constraints';
import {getDimensions} from '../Constraints';
import FeaturedCard from './FeaturedCard';
import Styles from '../Styles';
import NewsCard from './NewsCard';
import { useDispatch,useSelector } from 'react-redux';
import { getNews } from '../Redux/Action';
import { ActivityIndicator } from 'react-native-paper';
import newsCategoryData from '../DB/NewsCategory';
const NewsComp = () => {
    const [selectedIndex,setSelectedIndex] = useState(0);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getNews("general"));
    },[]);
    const globalState = useSelector((state)=>state.news);
    const {loading,news} = globalState;
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={Styles.headingText}>News</Text>
      </View>
      <FlatList
        data={newsCategoryData}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedIndex(index);
                dispatch(getNews(item.link));
              }}
              style={[
                styles.btnStyle,
                {
                  backgroundColor: selectedIndex === index ? 'tomato' : 'white',
                },
              ]}>
              <Text
                style={[
                  styles.btnTextStyle,
                  {color: selectedIndex === index ? 'white' : 'tomato'},
                ]}>
                {item.category}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(curr, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {loading ? (
        <View>
            <ActivityIndicator animating={true} color="tomato" size={35} style={{paddingVertical:80}}/>
        </View>
      ) : (
        <>
          {news?.map((curr, index) => {
            return (
              <NewsCard
                title={curr.title}
                imgURL={curr.urlToImage}
                publishedDate={curr.publishedAt}
                source={curr?.source?.name}
                url={curr.url}
                comments={Math.floor(Math.random() * (1, 1000))}
                key={index}
              />
            );
          })}
        </>
      )}
    </View>
  );
};

export default NewsComp;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
    },
  headingContainer: {
    paddingBottom: 10,
  },
  btnStyle: {
    borderWidth: 2,
    borderColor: colors.buttonBoldFillColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight:5,
    borderRadius: 20,
  },
  btnTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textAlign: 'center',
  },
});
