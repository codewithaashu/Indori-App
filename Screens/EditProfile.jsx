import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Styles from '../Styles';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../Constraints';
import {Avatar, Dialog} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
const EditProfile = ({navigation}) => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    phone: '',
    about: '',
  });
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [avatar, setAvatar] = useState(
    'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  );

  const pickPictureCamera = async () => {
    try {
      setVisibleDialog(false);
      const resp = await ImagePicker.openCamera({
        width: 200,
        height: 200,
        cropping: true,
        cropperCircleOverlay: true,
      });
      setAvatar(resp.path);
    } catch (err) {
      Alert.alert(' User cancelled image selection');
    }
  };
  const pickPictureGallery = async () => {
    try {
      setVisibleDialog(false);
      const resp = await ImagePicker.openPicker({
        width: 200,
        height: 200,
        cropping: true,
        cropperCircleOverlay: true,
      });
      setAvatar(resp.path);
    } catch (err) {
      Alert.alert(' User cancelled image selection');
    }
  };

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
          Edit Profile
        </Text>
      </View>
      <View style={styles.imgMainContainer}>
        <View style={styles.imgContainer}>
          <Avatar.Image
            source={{
              uri: avatar,
            }}
            size={120}
            color="red"
          />
          <TouchableOpacity
            style={styles.iconBtnStyle}
            onPress={() => setVisibleDialog(true)}>
            <AntDesignIcon name="edit" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <Text
              style={[
                Styles.textPlainStyle,
                {marginHorizontal: '8%', fontSize: 16},
              ]}>
              Username<Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Username"
              value={formData.username}
              onChangeText={text => setFormData({...formData, username: text})}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text
              style={[
                Styles.textPlainStyle,
                {marginHorizontal: '8%', fontSize: 16},
              ]}>
              Full Name <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Full Name"
              value={formData.fullName}
              onChangeText={text => setFormData({...formData, fullName: text})}
            />
          </View>
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
              About
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="About"
              value={formData.about}
              onChangeText={text => setFormData({...formData, about: text})}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text
              style={[
                Styles.textPlainStyle,
                {marginHorizontal: '8%', fontSize: 16},
              ]}>
              Phone Number <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Phone Number"
              value={formData.phone}
              onChangeText={text => setFormData({...formData, phone: text})}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => navigation.navigate('bottomTab')}>
          <Text style={styles.btnTextStyle}>Save Changes</Text>
        </TouchableOpacity>
      </View>
      <Dialog
        visible={visibleDialog}
        onDismiss={() => setVisibleDialog(false)}
        style={{
          backgroundColor: '#343434',
          opacity: 0.8,
          paddingVertical: 25,
        }}>
        <Dialog.Content style={{gap: 25}}>
          <TouchableOpacity style={styles.DialogBtnStyle}>
            <Text style={styles.DialogBtnTextStyle} onPress={pickPictureCamera}>
              Take from Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.DialogBtnStyle}
            onPress={pickPictureGallery}>
            <Text style={styles.DialogBtnTextStyle}>Choose from Gallery</Text>
          </TouchableOpacity>
        </Dialog.Content>
      </Dialog>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  imgMainContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconBtnStyle: {
    backgroundColor: 'tomato',
    padding: 5,
    borderRadius: 50,
    position: 'absolute',
    left: 80,
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
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DialogBtnStyle: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 5,
  },
  DialogBtnTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
