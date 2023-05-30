import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../Constraints';

const JobDetailsSlider = ({setAction}) => {
const [selectedIndex, setSelectedIndex] = useState(0);
const jobDetailsHeading = ["Job Details","Job Description","About Company"]
  return (
    <View style={styles.container}>
      <FlatList
        data={jobDetailsHeading}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedIndex(index);
                if (item === 'Job Details') setAction('jobDetails');
                else if (item === 'Job Description') setAction('jobDescription');
                else if (item === 'About Company') setAction('aboutCompany');
                else setAction('reviews');
              }}
              style={[
                styles.btnStyle,
                {
                  borderBottomWidth:
                    selectedIndex === index
                      ? 2
                      : 0,
                },
              ]}>
              <Text
                style={[
                  styles.btnTextStyle,
                  {
                    color:
                      selectedIndex === index
                        ? 'tomato'
                        : colors.headingTextColor,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(curr, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default JobDetailsSlider

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20
    },
  btnStyle: {
    paddingHorizontal: 15,
    marginRight: 5,
    borderBottomColor:"tomato"
  },
  btnTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});