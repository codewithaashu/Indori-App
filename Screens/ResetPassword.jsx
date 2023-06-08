import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Styles from '../Styles';
import {colors} from '../Constraints';
import {Avatar} from 'react-native-paper';
import IoniIcon from 'react-native-vector-icons/Ionicons';
const ResetPassword = ({navigation}) => {
  const [formData, setFormData] = useState({password: '', confirmPassword: ''});
  return (
    <View style={[Styles.mainContainer]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IoniIcon name="arrow-back" size={30} color="tomato" />
        </TouchableOpacity>
        <Text
          style={[
            Styles.headingText,
            {width: '90%', textAlign: 'center', fontSize: 23},
          ]}>
          Reset Password
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/ddzlhdlda/image/upload/v1685472342/todoApp/My_password-amico_c38bnm.png',
          }}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={[Styles.headingText, {fontSize: 24}]}>
            Create a new password
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <Text
              style={[
                Styles.textPlainStyle,
                {marginHorizontal: '8%', fontSize: 16},
              ]}>
              New Password <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="New password"
              value={formData.email}
              onChangeText={text => setFormData({...formData, password: text})}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text
              style={[
                Styles.textPlainStyle,
                {marginHorizontal: '8%', fontSize: 16},
              ]}>
              Confirm New Password <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Confirm new password"
              value={formData.password}
              onChangeText={text => setFormData({...formData, password: text})}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => navigation.navigate('otpScreen')}>
            <Text style={styles.btnTextStyle}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 10,
    alignItems: 'flex-start',
  },
  imgContainer: {
    alignItems: 'center',
    maxHeight: '35%',
    marginVertical: 15,
  },
  imgStyle: {
    height: '100%',
    aspectRatio: 1,
  },
  container: {
    flex: 1,
    maxHeight: '70%',
  },
  headingContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 25,
  },
  formContainer: {
    alignItems: 'center',
    gap: 15,
    paddingVertical: 15,
  },
  textInputContainer: {
    width: '100%',
    gap: 3,
  },
  textInputStyle: {
    marginHorizontal: '5%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    width: '90%',
    borderRadius: 20,
    borderColor: colors.buttonBoldFillColor,
    color: colors.headingTextColor,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  btnStyle: {
    width: '90%',
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: '5%',
  },
  btnTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
