import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../Constraints';
import Styles from '../Styles';

const JobsDetailsCard = ({details}) => {
const {
  title,
  company,
  companyLogo,
  location,
  salary,
  jobType,
  jobLocationType,
  category,
} = details;
  return (
    <View style={[styles.container]}>
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
          <Text style={[Styles.mutedText, {fontSize: 14,textAlign:"center"}]}>{company}</Text>
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
        <Text style={[styles.btnText,{fontSize:14,fontWeight:"bold"}]}>Posted on 21 May</Text>
      </View>
    </View>
  );
};

export default JobsDetailsCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#BEBFC5',
    borderRadius: 20,
  },
  heroContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  imgCont: {
    width: '25%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    alignItems: 'center',
  },
  imgStyle: {
    width: 40,
    height: 40,
  },
  headingStyle: {
    gap: 0,
  },
  sectionContainer: {
    paddingTop: 10,
    gap: 8,
    flexDirection: 'column',
    alignItems: 'center',
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
    gap:10
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
