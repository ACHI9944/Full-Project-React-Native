import { Image, Text, View } from "react-native";
import ImagesMapStyle from "./ImagesMapStyle";

const styles = ImagesMapStyle;
function ImagesMap({ people }) {
  if (people.length > 7) {
    const slicedImages = people.slice(0, 7);
    const leftImages = people.length - 7;
    return (
      <View style={styles.images}>
        {slicedImages.map((item) => (
          <View key={item.id} style={styles.imageView}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </View>
        ))}
        <View style={styles.leftNumberView}>
          <Text style={styles.leftNumber}>{`+${leftImages}`}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.images}>
      {people.map((item) => (
        <View key={item.id} style={styles.imageView}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </View>
      ))}
    </View>
  );
}

export default ImagesMap;
