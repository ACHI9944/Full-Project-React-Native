import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import StarsRatingStyle from "./StarsRatingStyle";

<Ionicons name="md-star-outline" size={24} color="black" />;
const styles = StarsRatingStyle;

function StarsRating({ rating }) {
  return (
    <View style={styles.screen}>
      <Ionicons
        name={rating < 1 ? "md-star-outline" : "md-star-sharp"}
        size={22}
        color="#542ee0"
      />
      <Ionicons
        name={rating < 2 ? "md-star-outline" : "md-star-sharp"}
        size={22}
        color="#542ee0"
      />
      <Ionicons
        name={rating < 3 ? "md-star-outline" : "md-star-sharp"}
        size={22}
        color="#542ee0"
      />
      <Ionicons
        name={rating < 4 ? "md-star-outline" : "md-star-sharp"}
        size={22}
        color="#542ee0"
      />
      <Ionicons
        name={rating < 5 ? "md-star-outline" : "md-star-sharp"}
        size={22}
        color="#542ee0"
      />
    </View>
  );
}

export default StarsRating;
