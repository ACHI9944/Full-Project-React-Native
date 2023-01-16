import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import ChangeableInsightsStyle from "./ChangeableInsightsStyle";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const styles = ChangeableInsightsStyle;

function ChangeableInsights() {
  const [chosenPeriod, setChosenPeriod] = useState("");
  return (
    <>
      <View style={styles.headers}>
        <Text style={styles.header}>Insights</Text>
        <View style={styles.periods}>
          <Pressable
            style={[
              styles.periodView,
              chosenPeriod === "Weekly" ? styles.chosenPeriodView : null,
            ]}
            onPress={setChosenPeriod.bind(this, "Weekly")}
          >
            <Text
              style={[
                styles.period,
                chosenPeriod === "Weekly" ? styles.chosenPeriod : null,
              ]}
            >
              Weekly
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.periodView,
              chosenPeriod === "Monthly" ? styles.chosenPeriodView : null,
            ]}
            onPress={setChosenPeriod.bind(this, "Monthly")}
          >
            <Text
              style={[
                styles.period,
                chosenPeriod === "Monthly" ? styles.chosenPeriod : null,
              ]}
            >
              Monthly
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.periodView,
              chosenPeriod === "AllTime" ? styles.chosenPeriodView : null,
            ]}
            onPress={setChosenPeriod.bind(this, "AllTime")}
          >
            <Text
              style={[
                styles.period,
                chosenPeriod === "AllTime" ? styles.chosenPeriod : null,
              ]}
            >
              AllTime
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <View style={styles.data}>
          <AntDesign name="like2" size={35} color="black" />
          <Text style={styles.quantity}>13k</Text>
          <Text style={styles.field}>Engagement</Text>
        </View>
        <View style={styles.data}>
          <Ionicons name="phone-portrait-outline" size={35} color="black" />
          <Text style={styles.quantity}>24</Text>
          <Text style={styles.field}>Total Stories</Text>
        </View>
        <View style={styles.data}>
          <Ionicons name="folder-outline" size={35} color="black" />
          <Text style={styles.quantity}>34</Text>
          <Text style={styles.field}>Total</Text>
        </View>
      </ScrollView>
    </>
  );
}

export default ChangeableInsights;
