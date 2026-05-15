import Colors from "@/constants/colors";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FilterItem = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity style={styles.categoryWrapper}>
      <Text style={{ color: Colors.text, fontSize: 12, marginRight: 6 }}>
        {title}
      </Text>
      <Entypo name="chevron-small-down" size={20} color={Colors.text} />
    </TouchableOpacity>
  );
};

export default FilterItem;

const styles = StyleSheet.create({
  categoryWrapper: {
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 8,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 14,
  },
});
