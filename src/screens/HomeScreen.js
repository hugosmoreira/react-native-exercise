import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there, Hellow World</Text>
      <Button onPress={() => navigation.navigate('Components')} title="Go to Components Demo" />
      <Button onPress={() => navigation.navigate('List')} title="Go to List Demo" />
      <Button onPress={() => navigation.navigate('Screen')} title="Go to List Image Screen" />
      <Button onPress={() => navigation.navigate('Counter')} title="Go to List Counter Screen" />
      <Button onPress={() => navigation.navigate('Color')} title="Go to List Color Demo" />

      
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
