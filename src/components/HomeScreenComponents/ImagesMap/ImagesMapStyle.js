import { StyleSheet } from "react-native";

const ImagesMapStyle = StyleSheet.create({
  images: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 20,
  },

  imageView: {
    width: 35,
    height: 35,
    borderRadius: 180,
    marginLeft: -12,
    borderColor: "white",
    borderWidth: 1.5,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 180,
  },
  leftNumberView: {
    width: 35,
    height: 35,
    borderRadius: 180,
    marginLeft: -12,
    borderColor: "white",
    borderWidth: 1.5,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
  },
  leftNumber: {
    fontSize: "15",
    fontWeight: "600",
  },
});

export default ImagesMapStyle;
