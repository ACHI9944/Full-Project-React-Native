import { StyleSheet } from "react-native";

const AllCampaignsScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBox: {
    marginHorizontal: 15,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fbfbfb",
    alignItems: "center",
    borderRadius: 15,
  },
  searchInput: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  list: {
    marginTop: 5,
    marginHorizontal: 11,
    width: "100%",
    flexWrap: "wrap",
    marginBottom: 70,
  },
});

export default AllCampaignsScreenStyle;
