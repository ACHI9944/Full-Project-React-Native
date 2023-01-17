import { Image, Text, View } from "react-native";
import ImagesMapStyle from "./ImagesMapStyle";

const styles = ImagesMapStyle;
function ImagesMap({ people, innerStyle }) {
  if (people.length > 7) {
    const slicedImages = people.slice(0, 7);
    const leftImages = people.length - 7;
    return (
      <View
        style={[
          styles.images,
          innerStyle === "CampaignsAll" ? { paddingHorizontal: 22 } : null,
        ]}
      >
        {slicedImages.map((item) => (
          <View
            key={item.id}
            style={[
              styles.imageView,
              innerStyle === "CampaignsAll" ? { marginLeft: -20 } : null,
            ]}
          >
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
    <View
      style={[
        styles.images,
        innerStyle === "CampaignsAll" ? { paddingHorizontal: 22 } : null,
      ]}
    >
      {people.map((item) => (
        <View
          key={item.id}
          style={[
            styles.imageView,
            innerStyle === "CampaignsAll" ? { marginLeft: -20 } : null,
          ]}
        >
          <Image source={{ uri: item.url }} style={styles.image} />
        </View>
      ))}
    </View>
  );
}

export default ImagesMap;
