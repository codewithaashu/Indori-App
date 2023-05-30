import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';
import Styles from '../Styles';
import MaterialCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { colors, defaultData, monthMap } from '../Constraints';
import { useNavigation } from '@react-navigation/native';
const NewsCard = ({title,imgURL,publishedDate,source,url,comments}) => {
    const month = monthMap[Number(publishedDate.substring(6, 7))-1];
    const date = publishedDate.substring(8,10);
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("webview",{url:url})}>
      <Image
        source={{
          uri: imgURL
            ? imgURL
            : defaultData.newsImgURL,
        }}
        style={{
          height: '100%',
          width: '40%',
          resizeMode: 'contain',
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <View style={styles.contentCont}>
        <Text style={[Styles.textStyle, {paddingBottom: 0,}]}>
          {title.slice(0,50)+"..."}
        </Text>
        <View style={styles.iconMainCont}>
          <View style={styles.iconCont}>
            <MaterialCIcon
              name="clock-time-four-outline"
              size={20}
              color={'tomato'}
            />
            <Text style={styles.iconTextStyle}>{`${date} ${month}`}</Text>
          </View>
          <View style={styles.iconCont}>
            <MaterialIcon name="comment" size={20} color={'tomato'} />
            <Text style={styles.iconTextStyle}>{comments}</Text>
          </View>
        </View>
        <View style={styles.btnStyle}>
          <Text style={styles.btnTextStyle}>{source}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  imgCont: {
    width: '40%',
  },
  contentCont: {
    width: '60%',
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap:7
  },
  iconMainCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCont: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  iconTextStyle: {
    color: colors.headingTextColor,
    fontWeight: 'bold',
    fontSize: 13,
  },
  btnStyle: {
    // marginTop:10,
    borderWidth: 2,
    borderColor: colors.buttonBoldFillColor,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
    justifyContent:"flex-end"
  },
  btnTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
    color:"tomato"
  },
});
