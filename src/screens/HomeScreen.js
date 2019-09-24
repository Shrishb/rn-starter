import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
  <View>
  <Text style={styles.text}>HomeScreen</Text>
  <Button style={styles.margin}
  onPress={() => props.navigation.navigate('Components')}
   title="Navigate View"
  />
    <Button style={styles.margin}
  onPress={() => props.navigation.navigate('List')}
   title="Navigate to List View"
  />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  margin:{
    marginVertical:20
  }
});

export default HomeScreen;
