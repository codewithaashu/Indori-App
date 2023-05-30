import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../Constraints';
import {getDimensions} from '../Constraints';
import Styles from '../Styles';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../Redux/Action';
import {ActivityIndicator} from 'react-native-paper';
import newsCategoryData from '../DB/NewsCategory';
import jobCategoryData from '../DB/JobCategory';
import JobsCard from '../Components/JobsCard';
import jobs from '../DB/Jobs.json';
const JobsComp = () => {
  const [selectedIndex,setSelectedIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={Styles.headingText}>News</Text>
      </View>
      <FlatList
        data={jobCategoryData}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedIndex(index);
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
      <View style={styles.jobContainer}>
        {
          jobs.map((curr,index)=>{
            const {title,companyLogo,company,location,salary,jobType,jobLocationType} = curr;
            return (
              <JobsCard
                title={title}
                companyLogo={companyLogo}
                company={company}
                location={location}
                salary={salary}
                jobType={jobType}
                jobLocationType={jobLocationType}
                key={index}
              />
            );
          })
        }
        
      </View>
    </View>
  );
};

export default JobsComp;

const styles = StyleSheet.create({
  container: {
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
    marginRight: 5,
    borderRadius: 20,
  },
  btnTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textAlign: 'center',
  },
  jobContainer:{
    paddingVertical:20,
    flexDirection:"column",
    gap:15
  }
});
