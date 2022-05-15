import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1, marginTop: 20 },
  emptyDataText: { fontSize: 14, textAlign: "center", marginTop: 20 },
  searchInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 10,
    paddingVertical: 10,
    width: "90%",
    marginVertical: 10,
  }
})

export default styles;