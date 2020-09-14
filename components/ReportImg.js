import * as React from 'react';
import { Image, View, StyleSheet} from 'react-native';

export default function ReportImg() {
  return (
    <View>
      <Image style={styles.logo} source={require('.././assets/ReportImg.jpeg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50
  }
})