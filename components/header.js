import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.Text}> my todos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    height: 80,
    backgroundColor: "blue",
  },
  Text: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    paddingTop: 20,
  },
});
