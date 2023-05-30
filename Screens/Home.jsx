import {ScrollView,View} from 'react-native';
import React from 'react';
import Styles from '../Styles';
import SearchComp from '../Components/SearchComp';
import TilteComp from '../Components/TilteComp';
import FeaturedComp from '../Components/FeaturedComp';
import NewsComp from '../Components/NewsComp';
const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[Styles.mainContainer, {gap: 15}]}>
        <TilteComp />
        <SearchComp title={'News'} />
        <FeaturedComp title={"Featured"} />
        <NewsComp />
      </View>
    </ScrollView>
  );
};

export default Home;