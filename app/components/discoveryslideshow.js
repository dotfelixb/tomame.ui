import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropType from "prop-types";

export default class DiscoverySlideShow extends React.Component {
  static propType = {
    imageSource: PropType.string.isRequired
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {}
});
