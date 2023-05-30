import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Styles from '../Styles';
import {requirementData,headquarter,aboutCompany,companyWebsite,responsibilitesData,jobDescription} from "../DB/JobDetails"

export const JobDetailCard = () => {
  return (
    <View style={styles.jobDetailsStyle}>
      <View style={[Styles.borderBoxStyle, {gap: 8}]}>
        <View style={styles.rowStyle}>
          <IonIcon name="ios-briefcase-outline" size={20} color="#717b9e" />
          <Text style={Styles.textPlainStyle}>0-1 Year</Text>
        </View>
        <View style={styles.rowStyle}>
          <FeatherIcon name="users" size={20} color="#717b9e" />
          <Text style={Styles.textPlainStyle}>50 Openings</Text>
        </View>
        <View style={styles.rowStyle}>
          <IonIcon name="ios-wallet-outline" size={20} color="#717b9e" />
          <Text style={Styles.textPlainStyle}>&#8377; 2.5-4.5 Lacs PA</Text>
        </View>
        <View style={styles.rowStyle}>
          <IonIcon name="ios-location-outline" size={20} color="#717b9e" />
          <Text style={Styles.textPlainStyle}>Indore,MP</Text>
        </View>
        <View>
          <Text style={Styles.textStyle}>Must have key skills</Text>
          <Text style={Styles.textPlainStyle}>
            HTML,CSS,Illustrator,Wireframing,Photoshop
          </Text>
        </View>
        <View>
          <Text style={Styles.textStyle}>Other key skills</Text>
          <Text style={Styles.textPlainStyle}>
            Javascript, Software Design, React/Angular
          </Text>
        </View>
      </View>
    </View>
  );
};

export const JobDescriptionCard = () => {
  return (
    <>
      <Text
        style={[Styles.headingText, {paddingHorizontal: 25, paddingTop: 5}]}>
        Job Description
      </Text>
      <View style={styles.jobDescriptionStyle}>
        <View style={Styles.borderBoxStyle}>
          <Text style={[Styles.textStyle, {fontSize: 16}]}>What you'll do</Text>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>
              Job Description :
            </Text>
            <Text style={Styles.textPlainStyle}>
              {jobDescription}
            </Text>
          </View>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>
              Responsibilities :
            </Text>
            {responsibilitesData.split(".").map((curr, index) => {
              return (
                curr.length>0 && <View style={[styles.rowStyle, {width: '95%'}]} key={index}>
                  <EntypoIcon name="dot-single" size={20} />
                  <Text style={Styles.textPlainStyle}>{curr}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>
              Requirements :
            </Text>
            {requirementData.split(".").map((curr, index) => {
              return (
                curr.length>0 && <View style={[styles.rowStyle, {width: '95%'}]} key={index}>
                  <Text style={Styles.textPlainStyle}>{index+1}.</Text>
                  <Text style={Styles.textPlainStyle}>{curr}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
};
export const CompanyCard = () => {
  return (
    <>
      <Text
        style={[Styles.headingText, {paddingHorizontal: 25, paddingTop: 5}]}>
        About Company
      </Text>
      <View style={styles.jobDescriptionStyle}>
        <View style={Styles.borderBoxStyle}>
          <View style={styles.colStyle}>
            {aboutCompany.split(".").map((curr, index) => {
              return (
                curr.length>0&&
                <View style={[styles.rowStyle, {width: '95%'}]} key={index}>
                  <Text style={Styles.textPlainStyle}>{curr}.</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>Website :</Text>
            <Text style={[Styles.textPlainStyle, {color: 'blue'}]}>
              {companyWebsite}
            </Text>
          </View>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>
              Headquarters:
            </Text>
            <Text style={Styles.textPlainStyle}>{headquarter}</Text>
          </View>
        </View>
      </View>
    </>
  );
};


const JobDescription = ({action}) => {
  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.jobDetailsStyle}>
        <View style={[Styles.borderBoxStyle, {gap: 8}]}>
          <View style={styles.rowStyle}>
            <IonIcon name="ios-briefcase-outline" size={20} color="#717b9e" />
            <Text style={Styles.textPlainStyle}>0-1 Year</Text>
          </View>
          <View style={styles.rowStyle}>
            <FeatherIcon name="users" size={20} color="#717b9e" />
            <Text style={Styles.textPlainStyle}>50 Openings</Text>
          </View>
          <View style={styles.rowStyle}>
            <IonIcon name="ios-wallet-outline" size={20} color="#717b9e" />
            <Text style={Styles.textPlainStyle}>&#8377; 2.5-4.5 Lacs PA</Text>
          </View>
          <View style={styles.rowStyle}>
            <IonIcon name="ios-location-outline" size={20} color="#717b9e" />
            <Text style={Styles.textPlainStyle}>Indore,MP</Text>
          </View>
          <View>
            <Text style={Styles.textStyle}>Must have key skills</Text>
            <Text style={Styles.textPlainStyle}>
              HTML,CSS,Illustrator,Wireframing,Photoshop
            </Text>
          </View>
          <View>
            <Text style={Styles.textStyle}>Other key skills</Text>
            <Text style={Styles.textPlainStyle}>
              Javascript, Software Design, React/Angular
            </Text>
          </View>
        </View>
      </View> */}
      {/* <Text
        style={[Styles.headingText, {paddingHorizontal: 25, paddingTop: 5}]}>
        Job Description
      </Text>
      <View style={styles.jobDescriptionStyle}>
        <View style={Styles.borderBoxStyle}>
          <Text style={[Styles.textStyle, {fontSize: 16}]}>What you'll do</Text>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>
              Job Description :
            </Text>
            <Text style={Styles.textPlainStyle}>
              We are seeking a highly skilled and talented UI/UX Designer to
              join our dynamic team. The successful candidate will be
              responsible for creating visually appealing and user-friendly
              interfaces for our digital products (website & learning
              experience) ensuring a seamless and engaging user experience.
            </Text>
          </View>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>
              Responsibilities :
            </Text>
            {responsibilitesData.map((curr, index) => {
              return (
                <View style={[styles.rowStyle, {width: '95%'}]} key={index}>
                  <EntypoIcon name="dot-single" size={20} />
                  <Text style={Styles.textPlainStyle}>{curr}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.colStyle}>
            <Text style={[Styles.textStyle, {fontSize: 13}]}>
              Requirements :
            </Text>
            {requirementData.map((curr, index) => {
              return (
                <View style={[styles.rowStyle, {width: '95%'}]} key={index}>
                  <Text style={Styles.textPlainStyle}>{curr.indx}.</Text>
                  <Text style={Styles.textPlainStyle}>{curr.data}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View> */}
      {action === 'jobDetails' && <JobDetailCard />}
      {action === 'jobDescription' && <JobDescriptionCard />}
      {action === 'aboutCompany' && <CompanyCard />}
    </View>
  );
};

export default JobDescription;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 10,
    marginBottom: 50,
  },
  jobDetailsStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10
  },
  colStyle: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  rowStyle: {
    flexDirection: 'row',
    gap: 10,
  },
  jobDescriptionStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listContainer: {
    paddingVertical: 15,
  },
});
