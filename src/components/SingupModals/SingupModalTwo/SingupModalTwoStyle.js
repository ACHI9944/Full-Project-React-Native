import { Platform, StyleSheet } from "react-native";

const SingupModalTwoStyle = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    marginVertical: Platform.OS === "ios" ? 30 : null,
  },
  topBar: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
  texts: {
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: "500",
  },
  infoText: {
    fontSize: 17,
    fontWeight: "400",
  },
  signupForm: {
    flex: 2.7,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    width: "100%",
    height: "100%",
  },
  screencontent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  inputs: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  details: {
    width: "90%",
    paddingVertical: 20,
  },
  detailsText: {
    fontSize: 20,
    fontWeight: "100",
  },
  button: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  pressedStyle: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    marginTop: 20,
    marginBottom: 5,
  },
  validStyle: {
    backgroundColor: "#542ee0",
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 17,
  },
  budgetInputs: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  budget: {
    flex: 3.2,
  },
  unit: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  agree: {
    width: "90%",
    paddingVertical: 10,

    color: "#bbaaf3",
    fontSize: 20,
    fontWeight: "100",
    marginLeft: 30,
  },
});

export default SingupModalTwoStyle;
