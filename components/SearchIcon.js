import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchIcon(){
  return(
    <View>
      <TouchableOpacity>
        <MaterialIcons name='search' size={21} />
      </TouchableOpacity>
    </View>
  );
}