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
const Login = ({navigation}) => {
  const [formData, setFormData] = useState({email: '', password: ''});
  return (
    <View style={[Styles.mainContainer, {paddingTop: 0}]}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/ddzlhdlda/image/upload/v1685467785/todoApp/Mobile_login_moo5ay.png',
          }}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={[Styles.headingText, {fontSize: 24}]}>
            Let's Sign You In
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <Text
              style={[
                Styles.textPlainStyle,
                {marginHorizontal: '8%', fontSize: 16},
              ]}>
              Email <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Email"
              value={formData.email}
              onChangeText={text => setFormData({...formData, email: text})}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text
              style={[
                Styles.textPlainStyle,
                {marginHorizontal: '8%', fontSize: 16},
              ]}>
              Password <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Password"
              value={formData.password}
              onChangeText={text => setFormData({...formData, password: text})}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnTextStyle}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginVertical: 15, alignSelf: 'center'}}
          onPress={() => navigation.navigate('forgotPassword')}>
          <Text style={[Styles.textStyle, {color: colors.buttonBoldFillColor}]}>
            Forgot the password?
          </Text>
        </TouchableOpacity>
        <Text style={[Styles.textStyle, {textAlign: 'center'}]}>
          or continue with
        </Text>
        <View style={styles.iconMainContainer}>
          <View
            style={[
              Styles.borderBoxStyle,
              styles.iconContainer,
              {width: '45%'},
            ]}>
            <Avatar.Image
              source={{
                uri: 'https://i.pinimg.com/736x/4f/e7/a4/4fe7a47ae527184e42aad59aa02d0f16.jpg',
              }}
              size={28}
            />
            <Text
              style={[Styles.textStyle, {textAlign: 'center', fontSize: 15}]}>
              Facebook
            </Text>
          </View>
          <View
            style={[
              Styles.borderBoxStyle,
              styles.iconContainer,
              {width: '45%'},
            ]}>
            <Avatar.Image
              source={{
                uri: 'https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg',
              }}
              size={28}
            />
            <Text
              style={[
                Styles.textStyle,
                {
                  textAlign: 'center',
                  fontSize: 15,
                },
              ]}>
              Google
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={[Styles.textPlainStyle, {fontSize: 15}]}>
            Don't have an account? &nbsp;
            <Text
              style={[
                Styles.textStyle,
                {
                  color: colors.buttonBoldFillColor,
                  fontSize: 15,
                },
              ]}
              onPress={() => navigation.navigate('signup')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    maxHeight: '30%',
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
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center',
    gap: 20,
    paddingVertical: 30,
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
  iconMainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    height: 60,
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
