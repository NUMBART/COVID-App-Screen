import * as React from 'react';
import { Image, View, StyleSheet} from 'react-native';

export default function GreenCircle() {
  return (
    <View>
      <Image style={styles.logo} source={require('.././assets/greenCircle.jpeg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 35,
    width: 35
  }
})