import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, SafeAreaView, TextInput, View } from "react-native";
import DummyCampaigns from "../../components/DummyCampaigns";
import AllCampaignsHeader from "../../components/HomeScreenComponents/AllCampaignsHeader/AllCampaignsHeader";
import CampaignsAll from "../../components/HomeScreenComponents/CampaignsAll/CampaignsAll";
import AllCampaignsScreenStyle from "./AllCampaignsScreenStyle";
const styles = AllCampaignsScreenStyle;

function AllCampaignsScreen({ navigation }) {
  const [filteredData, setFilteredData] = useState(DummyCampaigns);

  function filterFunction(text) {
    if (text) {
      const newData = DummyCampaigns.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(DummyCampaigns);
    }
  }
  function searchHandler(enteredText) {
    filterFunction(enteredText);
  }
  function renderData(itemData) {
    return <CampaignsAll item={itemData.item} />;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AllCampaignsHeader onPress={() => navigation.goBack()} />
      <View style={styles.searchBox}>
        <Ionicons name="md-search-outline" size={25} color="#959595" />
        <TextInput
          placeholder="Search campaign"
          style={styles.searchInput}
          onChangeText={searchHandler}
        />
      </View>

      <View style={styles.list}>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderData}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default AllCampaignsScreen;
