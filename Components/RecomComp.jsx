import {
  Dimensions,
  FlatList,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../Constraints';
import {getDimensions} from '../Constraints';
import FeaturedCard from './FeaturedCard';
import Styles from '../Styles';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import jobs from '../DB/Jobs.json';
import JobsCard from './JobsCard';

const RecomComp = () => {
  const loading = false;
  let featuredJobs = [];
  if (jobs) {
    featuredJobs = jobs.slice(0, 5);
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={Styles.headingText}>Recommendation</Text>
      </View>

        {loading ? (
          <ActivityIndicator
            animating={true}
            color="tomato"
            size={35}
            style={{paddingVertical: 20}}
          />
        ) : (
          <FlatList
            data={featuredJobs}
            renderItem={({item}) => (
              <JobsCard
                title={item.title}
                companyLogo={item.companyLogo}
                company={item.company}
                location={item.location}
                salary={item.salary}
                jobType={item.jobType}
                jobLocationType={item.jobLocationType}
                featured={true}
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

export default RecomComp;

const styles = StyleSheet.create({
  headingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});
