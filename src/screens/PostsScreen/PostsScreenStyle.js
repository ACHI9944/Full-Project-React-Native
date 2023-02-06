import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const PostsScreenStyle = StyleSheet.create({
  screen: {
    /* width: "100%", */
  },
  storyView: {
    margin: 15,

    height: deviceHeight - 120,
  },
});

export default PostsScreenStyle;
