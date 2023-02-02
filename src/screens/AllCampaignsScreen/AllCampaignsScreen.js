import { useRef, useState } from "react";
import { FlatList, KeyboardAvoidingView, View } from "react-native";
import { Modalize } from "react-native-modalize";
import DummyCampaigns from "../../components/DummyCampaigns";
import AllCampaignsHeader from "../../components/HomeScreenComponents/AllCampaignsHeader/AllCampaignsHeader";
import Searchbox from "../../components/HomeScreenComponents/Searchbox/Searchbox";
import SortModal from "../../components/HomeScreenComponents/SortModal/SortModal";
import AllCampaignsScreenStyle from "./AllCampaignsScreenStyle";
import CampaignBoxed from "../../components/HomeScreenComponents/CampaignBoxed/CampaignBoxed";
import Campaign from "../../components/HomeScreenComponents/Campaign/Campaign";
const styles = AllCampaignsScreenStyle;

function AllCampaignsScreen({ navigation }) {
  const [filteredData, setFilteredData] = useState(DummyCampaigns);
  const [boxed, setBoxed] = useState(true);
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
    return boxed ? (
      <CampaignBoxed item={itemData.item} />
    ) : (
      <Campaign item={itemData.item} />
    );
  }
  const modalizeSort = useRef(null);
  const [sort, setSort] = useState("Newest to oldest");

  function onOpenSortModal() {
    modalizeSort.current?.open();
  }
  function onCancelSortModal() {
    modalizeSort.current?.close();
  }

  const sortedData = filteredData.sort((a, b) => {
    if (sort === "Alphabet A-Z") {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    } else if (sort === "Alphabet Z-A") {
      return a.name > b.name ? -1 : a.name > b.name ? 1 : 0;
    } else if (sort === "Newest to oldest") {
      return a.date.getTime() - b.date.getTime();
    } else if (sort === "Oldest to newest") {
      return b.date.getTime() - a.date.getTime();
    }
  });

  return (
    <>
      <KeyboardAvoidingView style={styles.mainView} behavior="height">
        <AllCampaignsHeader
          onPress={() => navigation.goBack()}
          onChangeSize={() => setBoxed((prevValue) => !prevValue)}
          boxed={boxed}
          onOpenSortModal={onOpenSortModal}
          onCancelSortModal={onCancelSortModal}
        />
        <Searchbox onChangeText={searchHandler} placeholder="Search campaign" />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.containerStyle}
          data={sortedData}
          keyExtractor={(item) => item.id}
          renderItem={renderData}
          showsVerticalScrollIndicator={false}
          numColumns={boxed ? 2 : 1}
          key={boxed ? 2 : 1}
        />
      </KeyboardAvoidingView>
      <Modalize
        ref={modalizeSort}
        modalStyle={styles.businessModal}
        adjustToContentHeight={true}
      >
        <SortModal
          sort={sort}
          setSort={setSort}
          onCancelSortModal={onCancelSortModal}
        />
      </Modalize>
    </>
  );
}

export default AllCampaignsScreen;
