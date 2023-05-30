import { Dimensions } from "react-native";
export const monthMap ={0:"January",1:"Feburary",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};

export const colors = {
  headingTextColor: '#0C243B',
  subHeadingTextColor: '#7C8CB3',
  buttonBoldFillColor: '#FF7518',
  buttonFillColor: 'rgb(255,117,111)',
  mutedColor: 'rgb(113, 123, 158)',
  mutedBackgroundColor: '#F2F3F4',
  borderColor: '#BEBFC5',
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const getDimensions = {
  width,
  height
} 

export const secureData = {
  apiKey : "a5c083c64bb540cb9b211e009019146b"
}

export const defaultData = {
  newsImgURL:
    'https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=',
};