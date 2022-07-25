import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { marginHorizontal: 20, marginTop: 20 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  text: {
    fontSize: 14,
  },
  picker: { height: 50, width: "100%", fontSize: 14, borderRadius: 8, borderWidth: 1, marginTop: 20, paddingLeft: 15 },
});

export default styles;