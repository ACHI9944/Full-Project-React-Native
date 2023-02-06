import { StyleSheet } from "react-native";

const StoryStyle = StyleSheet.create({
  imageView: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    borderRadius: 5,
  },
  profileImage: {
    width: 33,
    height: 33,
    borderRadius: 180,
    marginHorizontal: 5,
    marginTop: 25,
  },
  textsView: {
    height: 37,
    marginTop: 22,
    justifyContent: "space-between",
  },
  creatornameText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  campaignNameText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default StoryStyle;
