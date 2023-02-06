import { Image, ImageBackground, Text, View } from "react-native";
import StoryStyle from "./StoryStyle";

const styles = StoryStyle;
function Story({ story, name, creator }) {
  return (
    <ImageBackground
      source={{ uri: story.story }}
      style={styles.imageView}
      imageStyle={styles.image}
    >
      <Image source={{ uri: creator.photo }} style={styles.profileImage} />
      <View style={styles.textsView}>
        <Text style={styles.creatornameText}>{creator.name}</Text>
        <Text style={styles.campaignNameText}>For: {name}</Text>
      </View>
    </ImageBackground>
  );
}

export default Story;
