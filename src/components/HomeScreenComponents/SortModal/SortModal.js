import { Pressable, Text, View } from "react-native";
import CheckIcon from "../../ui/CheckIcon";
import sortModalStyle from "./SortModalStyle";
const styles = sortModalStyle;

function SortModal({ sort, setSort, onCancelSortModal }) {
  return (
    <View style={styles.modal}>
      <Text style={styles.header}>Sort By</Text>
      <Pressable
        style={styles.select}
        onPress={() => setSort("Newest to oldest")}
      >
        <Text
          style={[
            styles.selectText,
            sort === "Newest to oldest" ? { color: "#59cada" } : null,
          ]}
        >
          Newest to oldest
        </Text>
        {sort === "Newest to oldest" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable
        style={styles.select}
        onPress={() => setSort("Oldest to newest")}
      >
        <Text
          style={[
            styles.selectText,
            sort === "Oldest to newest" ? { color: "#59cada" } : null,
          ]}
        >
          Oldest to newest
        </Text>
        {sort === "Oldest to newest" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable style={styles.select} onPress={() => setSort("Alphabet A-Z")}>
        <Text
          style={[
            styles.selectText,
            sort === "Alphabet A-Z" ? { color: "#59cada" } : null,
          ]}
        >
          Alphabet A-Z
        </Text>
        {sort === "Alphabet A-Z" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable style={styles.select} onPress={() => setSort("Alphabet Z-A")}>
        <Text
          style={[
            styles.selectText,
            sort === "Alphabet Z-A" ? { color: "#59cada" } : null,
          ]}
        >
          Alphabet Z-A
        </Text>
        {sort === "Alphabet Z-A" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable style={styles.cancel} onPress={onCancelSortModal}>
        <Text style={styles.cancelText}>cancel</Text>
      </Pressable>
    </View>
  );
}

export default SortModal;
