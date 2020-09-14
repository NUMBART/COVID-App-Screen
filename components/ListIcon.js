import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default function ListIcon() {
  return(
    <View>
      <TouchableOpacity>
        <Foundation name='list' size={18}/>
      </TouchableOpacity>
    </View>
  )
}