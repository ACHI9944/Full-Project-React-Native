import { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import ChangeableData from "../../components/CreatorsComponents/ChangeableData/ChangeableData";
import StarsRating from "../../components/CreatorsComponents/StarsRating/StarsRating";
import DummyCampaigns from "../../components/DummyCampaigns";
import NumberSlicer from "../../components/ui/NumberSlicer";
import CreatorScreenStyle from "./CreatorScreenStyle";
import { Ionicons } from "@expo/vector-icons";
import Story from "../../components/CommonComponents/Story/Story";

const styles = CreatorScreenStyle;
function CreatorScreen({ route }) {
  const selectedCampaign =
    route &&
    DummyCampaigns.find((campaign) =>
      campaign.creators.find((creator) => creator.id === route.params.creatorId)
    );

  const selectedCreator = selectedCampaign.creators.find(
    (item) => item.id === route.params.creatorId
  );

  const [data, setData] = useState("stories");

  return (
    <ScrollView style={styles.ScrollView}>
      <ImageBackground
        source={{ uri: selectedCreator.photo }}
        style={styles.backImageView}
        imageStyle={styles.backImage}
        blurRadius={5}
      >
        <View style={styles.creator}>
          <View style={styles.imageView}>
            <Image
              source={{ uri: selectedCreator.photo }}
              style={styles.image}
            />
          </View>
          <Text style={styles.name}>{selectedCreator.name}</Text>
          <Text style={styles.linkName}>{selectedCreator.linkName}</Text>
          <StarsRating rating={3} />
          <View style={styles.data}>
            <View style={styles.dataElement}>
              <Text style={styles.upperText}>
                {selectedCreator.stories.length}
              </Text>
              <Text style={styles.lowerText}>Posts</Text>
            </View>
            <View style={styles.dataElement}>
              <Text style={styles.upperText}>
                {NumberSlicer(selectedCreator.followers)}
              </Text>
              <Text style={styles.lowerText}>followers</Text>
            </View>
            <View style={styles.dataElement}>
              <Text style={styles.upperText}>6000</Text>
              <Text style={styles.lowerText}>Reach</Text>
            </View>
            <View style={styles.dataElement}>
              <Text style={styles.upperText}>4.10%</Text>
              <Text style={styles.lowerText}>ER</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.posts}>
        <View style={styles.campNameAndIcon}>
          <Text style={styles.campaignName}>{selectedCampaign.name}</Text>
          <Ionicons name="chevron-down-outline" size={24} color="black" />
        </View>
        <ChangeableData data={data} setData={setData} />
      </View>
      <View style={styles.stories}>
        {selectedCreator.stories.map((item) => (
          <View style={styles.storyView} key={item.id}>
            <Story
              story={item}
              name={selectedCampaign.name}
              creator={selectedCreator}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default CreatorScreen;
