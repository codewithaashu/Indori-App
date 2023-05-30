import {Platform, StatusBar, StyleSheet} from "react-native";
import { colors } from "../Constraints";
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '',
    paddingTop: 15,
    backgroundColor: 'white',
  },
  mutedText: {
    fontFamily: 'Poppins-Regular',
    color: '#555555',
    fontSize: 12,
    fontWeight: '400',
  },
  headingText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.headingTextColor,
  },
  textStyle: {
    color: colors.headingTextColor,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    paddingBottom: 3,
  },
  textPlainStyle: {
    color: colors.headingTextColor,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  borderBoxStyle: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#BEBFC5',
    borderRadius: 20,
    width: '90%',
    alignSelf: 'flex-start',
  },
});

export default Styles;