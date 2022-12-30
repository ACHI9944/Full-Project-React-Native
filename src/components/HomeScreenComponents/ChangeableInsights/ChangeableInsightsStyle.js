import { StyleSheet } from "react-native";

const ChangeableInsightsStyle = StyleSheet.create({
  headers: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  header: {
    fontSize: 30,
    fontWeight: "500",
  },
  periods: {
    flexDirection: "row",
  },
  periodView: {
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 6,
  },
  period: {
    fontSize: 13,
    fontWeight: "400",
    color: "#a6a6a6",
  },
  chosenPeriodView: {
    backgroundColor: "#06b2c9",
  },
  chosenPeriod: {
    color: "white",
  },
  scrollView: {
    flexDirection: "row",
    marginVertical: 20,
  },
  data: {
    width: 130,
    backgroundColor: "#fbfbfb",
    marginRight: 10,
    padding: 15,
  },
  quantity: {
    fontSize: 27,
    fontWeight: "600",
    marginVertical: 10,
  },
  field: {
    fontSize: 15,
    fontWeight: "500",
    color: "#a6a6a6",
  },
});

export default ChangeableInsightsStyle;
