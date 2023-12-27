import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#F1E4C3",
    boderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  square: {
    backgroundColor: "#C6A969",
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  },

  itemText: {
    maxWidth: "80%",
  },

  circular: {
    width: 12,
    height: 12,
    borderColor: "#C6A969",
    borderWidth: 2,
    borderRadius: 5,
  }


});

export default styles;
