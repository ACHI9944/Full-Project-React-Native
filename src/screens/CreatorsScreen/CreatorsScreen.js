import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Creator from "../../components/CreatorsComponents/Creator/Creator";
import CreatorBoxed from "../../components/CreatorsComponents/CreatorBoxed/CreatorBoxed";
import CreatorsScreenHeader from "../../components/CreatorsComponents/CreatorsScreenHeader/CreatorsScreenHeader";
import DummyCampaigns from "../../components/DummyCampaigns";
import creatorsScreenStyle from "./CreatorsScreenStyle";
const styles = creatorsScreenStyle;

function CreatorsScreen() {
  const [boxed, setBoxed] = useState(true);
  let creators = [];

  DummyCampaigns.map((item) => {
    item.creators.map((item) => creators.push(item));
  });
  for (let i = 0; i < creators.length; i++) {
    creators[i].id = i;
  }

  function renderData(itemData) {
    return boxed ? (
      <View style={styles.creatorBoxed}>
        <CreatorBoxed data={itemData.item} />
      </View>
    ) : (
      <Creator data={itemData.item} />
    );
  }
  return (
    <View style={styles.screen}>
      <CreatorsScreenHeader
        onChangeSize={() => setBoxed((prevValue) => !prevValue)}
        boxed={boxed}
      />
      <FlatList
        style={styles.list}
        data={creators}
        keyExtractor={(item) => item.id}
        renderItem={renderData}
        showsVerticalScrollIndicator={false}
        numColumns={boxed ? 2 : 1}
        key={boxed ? 2 : 1}
      />
    </View>
  );
}

export default CreatorsScreen;
