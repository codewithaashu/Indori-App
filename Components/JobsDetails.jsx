import {
    Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import JobsDetailsCard from './JobDetailsCard';
import {useNavigation} from '@react-navigation/native';
import Styles from '../Styles';
import JobDetailsSlider from './JobDetailsSlider';
import {colors} from '../Constraints';
import JobDescription from './JobDescription';

const JobsDetails = ({route}) => {
  const navigation = useNavigation();
  const [action,setAction] = useState("jobDetails");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          Styles.mainContainer,
          {gap: 15, height: Dimensions.get('window').height},
        ]}>
        <View style={styles.topNavigation}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IoniIcon name="arrow-back" size={24} color={'rgb(18, 18, 36)'} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', gap: 20}}>
            <FontAwesomeIcon
              name="bookmark-o"
              size={24}
              color={'rgb(18, 18, 36)'}
            />
            <FeatherIcon name="share" size={24} color={'rgb(18, 18, 36)'} />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <JobsDetailsCard details={route.params} />
        </View>
        <JobDetailsSlider setAction={setAction}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <JobDescription action={action} />
        </ScrollView>
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobsDetails;

const styles = StyleSheet.create({
  topNavigation: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    paddingVertical: 20,
  },
  btnCont:{
    position:"absolute",
    top:Dimensions.get("window").height-70,
    paddingHorizontal:20,
    width:"100%",
    alignItems:"center",
  },
  btnStyle: {
    borderWidth: 2,
    borderColor: colors.buttonBoldFillColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 20,
    width:"100%",
    backgroundColor:"tomato"
  },
  btnTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color:"white"
  },
});
