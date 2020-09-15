import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from './components/Header'
import QuestionnaireImg from './components/QuestionnaireImg'
import ReportImg from './components/ReportImg'
import EditImg from './components/EditImg'
import DaysImg from './components/DaysImg'
import GreenCirle from './components/GreenCircle'
import Feature from './components/Feature'

import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [name, setName] = useState('John');
  const [QRText, setQRText] = useState('https://github.com/NUMBART/COVID-App-Screen');

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={[{flex:1}]}>

        <View style={styles.featureContainer}>
          <View style={[{flex:1}]}>
            <Text style={[{fontSize:17}]}>Hi {name}</Text>
          </View>
          <View style={styles.featureList}>
            <Feature icon={<QuestionnaireImg/>} title={"Self Screening Questionnaire"}/>
            <Feature icon={<ReportImg/>} title={"COVID Test Reports"}/>
            <Feature icon={<EditImg/>} title={"Edit Self Information"}/>
            <Feature icon={<DaysImg/>} title={"Days left to next test"}/>
          </View>
        </View>

        <View style={styles.safeBarContainer}>
          <GreenCirle/>
          <Text style={styles.safeText}>You are Safe</Text>
        </View>

        <View style={styles.qrcodeContainer}>
        <QRCode 
          value={QRText}
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
  safeBarContainer: {
    flex: 1,
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
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
