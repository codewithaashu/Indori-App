import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Styles from '../Styles';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {Avatar} from 'react-native-paper';
import {colors} from '../Constraints';
const Profile = ({navigation}) => {
  return (
    <View style={Styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IoniIcon name="arrow-back" size={30} color="tomato" />
        </TouchableOpacity>
        <Text
          style={[
            Styles.headingText,
            {paddingLeft: 30, textAlign: 'justify', fontSize: 23},
          ]}>
          Profile
        </Text>
      </View>
      <View style={styles.imgMainContainer}>
        <Avatar.Image
          source={{
            uri: 'https://res.cloudinary.com/ddzlhdlda/image/upload/v1684652295/todoApp/IMG20220822190128_jj0wh4.jpg',
          }}
          size={65}
        />
        <View style={styles.imgTextContainer}>
          <Text style={[Styles.textStyle, {fontSize: 18, paddingBottom: 0}]}>
            Ashish Ranjan
          </Text>
          <Text style={[Styles.textPlainStyle, {fontSize: 15}]}>
            Hi!,I am new here.
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.listStyle}
          onPress={() => navigation.navigate('editProfile')}>
          <View style={styles.iconMainContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome5Icon name="user-alt" size={16} color="tomato" />
            </View>
            <Text style={[Styles.textStyle, {fontSize: 16}]}>Edit Profile</Text>
          </View>
          <MaterialIcon name="arrow-forward-ios" size={16} color="tomato" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listStyle}
          onPress={() => navigation.navigate('security')}>
          <View style={styles.iconMainContainer}>
            <View style={styles.iconContainer}>
              <FontistoIcon name="locked" size={18} color="tomato" />
            </View>
            <Text style={[Styles.textStyle, {fontSize: 16}]}>Security</Text>
          </View>
          <MaterialIcon name="arrow-forward-ios" size={16} color="tomato" />
        </TouchableOpacity>
        <View style={styles.listStyle}>
          <View style={styles.iconMainContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcon name="bookmark" size={22} color="tomato" />
            </View>
            <Text style={[Styles.textStyle, {fontSize: 16}]}>Saved</Text>
          </View>
          <MaterialIcon name="arrow-forward-ios" size={16} color="tomato" />
        </View>
        <View style={styles.listStyle}>
          <View style={styles.iconMainContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome5Icon name="bell" size={18} color="tomato" />
            </View>
            <Text style={[Styles.textStyle, {fontSize: 16}]}>
              Notifications
            </Text>
          </View>
          <MaterialIcon name="arrow-forward-ios" size={16} color="tomato" />
        </View>
        <View style={styles.listStyle}>
          <View style={styles.iconMainContainer}>
            <View style={styles.iconContainer}>
              <IoniIcon name="eye" size={20} color="tomato" />
            </View>
            <Text style={[Styles.textStyle, {fontSize: 16}]}>Appearence</Text>
          </View>
          <MaterialIcon name="arrow-forward-ios" size={16} color="tomato" />
        </View>
        <View style={styles.listStyle}>
          <View style={styles.iconMainContainer}>
            <View style={styles.iconContainer}>
              <IoniIcon name="information-circle" size={26} color="tomato" />
            </View>
            <Text style={[Styles.textStyle, {fontSize: 16}]}>Help</Text>
          </View>
          <MaterialIcon name="arrow-forward-ios" size={16} color="tomato" />
        </View>
        <View style={styles.listStyle}>
          <TouchableOpacity
            style={styles.iconMainContainer}
            onPress={() => navigation.navigate('login')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcon name="logout" size={24} color="tomato" />
            </View>
            <Text style={[Styles.textStyle, {fontSize: 16}]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  imgMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8FF',
  },
  container: {
    marginTop: 25,
    gap: 20,
  },
  listStyle: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 7,
    borderBottomColor: '#F1F1F2',
  },
  iconMainContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FBCEB1',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
