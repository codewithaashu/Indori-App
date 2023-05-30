import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from '../Styles';
import {Avatar} from 'react-native-paper';
import {monthMap} from '../Constraints';
import {colors} from '../Constraints';
import IonIcons from 'react-native-vector-icons/Ionicons';
const TilteComp = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.subTitleContainer}>
        <Avatar.Image
          source={{
            uri: 'https://res.cloudinary.com/ddzlhdlda/image/upload/v1684652295/todoApp/IMG20220822190128_jj0wh4.jpg',
          }}
          size={40}
        />
        <View style={styles.salutationContainer}>
          <Text style={styles.salutationText}>Hi,Ashish</Text>
          <Text style={Styles.mutedText}>
            {`Today, ${
              monthMap[new Date().getMonth()]
            } ${new Date().getDate()}`}
          </Text>
        </View>
      </View>
      <IonIcons
        name="ios-notifications"
        size={20}
        color={colors.buttonBoldFillColor}
      />
    </View>
  );
};

export default TilteComp;

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitleContainer: {flexDirection: 'row', gap: 10},
  salutationContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  salutationText: {
    fontSize: 18,
    color: colors.headingTextColor,
    fontFamily: 'OpenSans-Bold',
  },
});
