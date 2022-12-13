import { StyleSheet } from "react-native";

const SignupForm2Style = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  signupForm: {
    width: "100%",
    alignItems: "center",
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
    position: "absolute",
    bottom: 8,
  },
  pressedStyle: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    position: "absolute",
    bottom: 8,
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
    marginBottom: 80,
    color: "#bbaaf3",
    fontSize: 20,
    fontWeight: "100",
    marginLeft: 30,
  },
});

export default SignupForm2Style;
