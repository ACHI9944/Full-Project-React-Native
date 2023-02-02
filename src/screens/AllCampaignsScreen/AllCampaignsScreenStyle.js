import { StyleSheet } from "react-native";

const AllCampaignsScreenStyle = StyleSheet.create({
  mainView: {
    backgroundColor: "white",
  },
  searchBox: {
    marginTop: 10,
    marginHorizontal: 15,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fbfbfb",
    alignItems: "center",
    borderRadius: 7,
  },
  searchInput: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  list: {
    marginTop: 10,
    width: "100%",
    marginBottom: 165,
  },
});

export default AllCampaignsScreenStyle;
