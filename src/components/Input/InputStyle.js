import { StyleSheet } from "react-native";

const InputStyle = StyleSheet.create({
  input: {
    backgroundColor: "#fbfbfb",
    borderRadius: 4,

    width: "90%",
    height: 48,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: "center",
    marginBottom: 30,
    elevation: 2,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  correctInput: {
    borderWidth: 2,
    borderColor: "#59cada",
  },
  textInput: {
    fontSize: 20,
  },
});

export default InputStyle;
