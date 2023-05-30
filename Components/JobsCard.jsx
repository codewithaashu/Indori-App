import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../Constraints';
import Styles from '../Styles';
import {useNavigation} from '@react-navigation/native';

const JobsCard = ({
  title,
  company,
  companyLogo,
  location,
  salary,
  jobType,
  jobLocationType,
  category,
  featured,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: featured ? Dimensions.get('window').width - 30 : '100%',
          marginHorizontal: featured ? 15 : 0,
        },
      ]}
      onPress={() =>
        navigation.navigate(
          'jobsDetails',
          (state = {
            title,
            company,
            companyLogo,
            location,
            salary,
            jobType,
            jobLocationType,
            category,
            featured,
          }),
        )
      }>
      <View style={styles.headingContainer}>
        <View style={styles.heroContainer}>
          <View style={styles.imgCont}>
            <Image
              style={styles.imgStyle}
              source={{
                uri: companyLogo,
              }}
            />
          </View>
          <View style={styles.headingStyle}>
            <Text style={[Styles.textStyle, {paddingBottom: 0, fontSize: 17}]}>
              {title}
            </Text>
            <Text style={[Styles.mutedText, {fontSize: 14}]}>{company}</Text>
          </View>
        </View>
        <View style={{alignSelf: 'flex-start'}}>
          <FontAwesomeIcon name="bookmark-o" size={20} />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={[styles.textStyle]}>{location}</Text>
        <Text style={[styles.textStyle, {color: 'tomato'}]}>
          &#8377; {salary}
        </Text>
        <View style={styles.actionContainer}>
          <View style={styles.btnStyle}>
            <Text style={styles.btnText}>{jobType}</Text>
          </View>
          <View style={styles.btnStyle}>
            <Text style={styles.btnText}>{jobLocationType}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobsCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 20,
  },
  imgCont: {
    width: '25%',
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    alignSelf: 'flex-start',
  },
  imgStyle: {
    width: 40,
    height: 40,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.mutedBackgroundColor,
  },
  heroContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  headingStyle: {
    gap: 0,
  },
  sectionContainer: {
    paddingLeft: '20%',
    paddingTop: 5,
    gap: 3,
  },
  textStyle: {
    color: 'rgb(18, 18, 36)',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
  },
  actionContainer: {
    paddingTop: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  btnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: colors.mutedColor,
  },
});
