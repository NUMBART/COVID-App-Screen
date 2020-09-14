import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from './components/Header'
import QuestionnaireImg from './components/QuestionnaireImg'
import ReportImg from './components/ReportImg'
import EditImg from './components/EditImg'
import DaysImg from './components/DaysImg'
import GreenCirle from './components/GreenCircle'

import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [name, setName] = useState('John');

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={[{flex:1}]}>

        <View style={styles.featureContainer}>
          <View style={[{flex:1}]}>
            <Text style={[{fontSize:17}]}>Hi {name}</Text>
          </View>
          <View style={styles.featureList}>
            <TouchableOpacity>
            <View style={styles.feature}>
              <QuestionnaireImg/>
              <Text style={[{fontSize:10}, {textAlign:'center'}]}>Self Screening Questionnaire</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.feature}>
              <ReportImg/>
              <Text style={[{fontSize:10}, {textAlign:'center'}]}>COVID Test Reports</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.feature}>
              <EditImg/>
              <Text style={[{fontSize:10}, {textAlign:'center'}]}>Edit Self Information</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.feature}>
              <DaysImg/>
              <Text style={[{fontSize:10}, {textAlign:'center'}]}>Days left to next test</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.safeBarContainer}>
          <GreenCirle/>
          <Text style={styles.safeText}>You are Safe</Text>
        </View>

        <View style={styles.qrcodeContainer}>
        <QRCode 
          value="http://awesome.link.qr" 
          color='#08749E'
          size={180}  
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  featureContainer: {
    flex: 5,
    backgroundColor: 'white',
    width: '100%',
    padding: 10
  },
  featureList: {
    flex:4,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  feature: {
    height: 80,
    width: 70,
    alignItems: 'center',
  },
  safeBarContainer: {
    flex: 1.1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#38A94F'
  },
  safeText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  qrcodeContainer: {
    flex: 3.90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
