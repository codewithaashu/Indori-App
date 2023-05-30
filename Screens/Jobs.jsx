import {ScrollView, View} from 'react-native';
import React from 'react';
import Styles from '../Styles';
import SearchComp from '../Components/SearchComp';
import TilteComp from '../Components/TilteComp';
import NewsComp from '../Components/NewsComp';
import RecomComp from '../Components/RecomComp';
import JobsComp from './JobsComp';
const Jobs = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[Styles.mainContainer, {gap: 15}]}>
        <TilteComp />
        <SearchComp title={"Jobs"} />
        <RecomComp/>
        <JobsComp />
      </View>
    </ScrollView>
  );
};

export default Jobs;
