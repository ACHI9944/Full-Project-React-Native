import { Text, View } from "react-native";
import CreatorsScreenHeaderStyle from "./CreatorsScreenHeaderStyle";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const styles = CreatorsScreenHeaderStyle;

function CreatorsScreenHeader({ onChangeSize, boxed }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Creators</Text>
      <View style={styles.icons}>
        <Feather name="filter" size={24} color="black" />
        <Ionicons
          name={boxed ? "list-outline" : "md-grid-outline"}
          size={25}
          color="black"
          onPress={onChangeSize}
        />
      </View>
    </View>
  );
}

export default CreatorsScreenHeader;
