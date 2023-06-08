import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Styles from '../Styles';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../Constraints';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const email = 'ashishrajk123@gmail.com';
const emailPart = email.split('@');
const ForgotPassword = ({navigation}) => {
  const [opt, setOtp] = useState(null);
  return (
    <View style={Styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IoniIcon name="arrow-back" size={30} color="tomato" />
        </TouchableOpacity>
        <Text
          style={[
            Styles.headingText,
            {width: '90%', textAlign: 'center', fontSize: 24},
          ]}>
          Forgot Password
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/ddzlhdlda/image/upload/v1685689304/todoApp/Forgot_password-rafiki_crjp1k.png',
          }}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.otpMainContainer}>
        <Text
          style={[Styles.textPlainStyle, {fontSize: 16, textAlign: 'center'}]}>
          Code has been send to{' '}
          {emailPart[0].substring(0, 2) +
            '*****' +
            emailPart[0].substring(
              emailPart[0].length - 2,
              emailPart[0].length,
            ) +
            '@' +
            emailPart[1]}
        </Text>
        <View style={styles.otpContainer}>
          <OTPInputView
            pinCount={4}
            style={{width: '80%', height: 200}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              setOtp(code);
            }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => navigation.navigate('resetPassword')}>
          <Text style={styles.btnTextStyle}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

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
    maxHeight: '40%',
    marginVertical: 20,
  },
  imgStyle: {
    height: '100%',
    aspectRatio: 1,
  },
  otpMainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  otpContainer: {
    alignItems: 'center',
  },
  underlineStyleBase: {
    borderColor: colors.mutedColor,
    color: colors.headingTextColor,
  },
  underlineStyleHighLighted: {
    borderColor: 'tomato',
    color: 'red',
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
