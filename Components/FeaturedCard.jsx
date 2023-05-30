import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {colors, getDimensions, monthMap} from '../Constraints';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import Styles from '../Styles';
import { useNavigation } from '@react-navigation/native';

const FeaturedCard = ({imgURL, heading,publishedDate,url}) => 
  {
    const month = monthMap[Number(publishedDate.substring(6, 7)) - 1];
    const date = publishedDate.substring(8, 10);
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("webview",{url:url})}>
        <ImageBackground
          source={{
            uri: imgURL,
          }}
          style={styles.imgViewStyle}
          imageStyle={styles.imgStyle}></ImageBackground>
        <View style={styles.contentContainer}>
          <Text style={Styles.textStyle}>{heading.slice(0,65)+" ..."}</Text>
          <View style={styles.actionContainer}>
            <View style={styles.btnStyle}>
              <Text style={styles.btnText}>World</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcon
                name="clock-time-four-outline"
                size={18}
                color={'#C0C0C0'}
              />
              <Text
                style={[
                  styles.btnText,
                  {color: '#C0C0C0'},
                ]}>{`${date} ${month}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );};

export default FeaturedCard;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    width: getDimensions.width - 40,
    borderWidth: 1.4,
    borderColor: colors.mutedColor,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  imgViewStyle: {
    height: 150,
  },
  imgStyle: {
    borderRadius: 10,
    resizeMode:"contain"
  },

  contentContainer: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  btnStyle: {
    backgroundColor: '#E5E4E2',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#191970',
    fontSize: 10,
    textAlign: 'center',
  },
  actionContainer:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
