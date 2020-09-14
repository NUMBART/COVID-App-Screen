import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ListIcon from './ListIcon'
import SearchIcon from './SearchIcon'

export default function Header(){
  return (
    <View style={styles.container} >
      <View style={styles.borderView}>
        <ListIcon/>
        <SearchIcon/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    marginTop: 15,
    height: 40,
    paddingHorizontal: 7,
    paddingTop: 7
  },
  borderView:{
    flex: 1,
    width: '100%',
    paddingHorizontal: 13,
    borderTopColor: '#A0A0A0',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

//need to understand line 24 and 25