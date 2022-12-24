import { Pressable, Text, View } from "react-native";
import CheckIcon from "../../../ui/CheckIcon";
import BusinessSelectModalStyle from "./BusinessSelectModalStyle";
const styles = BusinessSelectModalStyle;

function BusinessSelectModal({
  onSetBusinessModal,
  businessModal,
  onCancelBusinessModal,
}) {
  return (
    <View style={styles.modal}>
      <Text style={styles.header}>Select Type</Text>
      <Pressable
        style={styles.select}
        onPress={onSetBusinessModal.bind(this, "Food & Beverage")}
      >
        <Text
          style={[
            styles.selectText,
            businessModal === "Food & Beverage" ? { color: "#59cada" } : null,
          ]}
        >
          Food & Beverage
        </Text>
        {businessModal === "Food & Beverage" && (
          <CheckIcon color="#59cada" size={22} />
        )}
      </Pressable>
      <Pressable
        style={styles.select}
        onPress={onSetBusinessModal.bind(this, "Hotels & Resort")}
      >
        <Text
          style={[
            styles.selectText,
            businessModal === "Hotels & Resort" ? { color: "#59cada" } : null,
          ]}
        >
          Hotels & Resort
        </Text>
        {businessModal === "Hotels & Resort" && (
          <CheckIcon color="#59cada" size={22} />
        )}
      </Pressable>
      <Pressable
        style={styles.select}
        onPress={onSetBusinessModal.bind(this, "Beauty")}
      >
        <Text
          style={[
            styles.selectText,
            businessModal === "Beauty" ? { color: "#59cada" } : null,
          ]}
        >
          Beauty
        </Text>
        {businessModal === "Beauty" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable
        style={styles.select}
        onPress={onSetBusinessModal.bind(this, "Restaurant")}
      >
        <Text
          style={[
            styles.selectText,
            businessModal === "Restaurant" ? { color: "#59cada" } : null,
          ]}
        >
          Restaurant
        </Text>
        {businessModal === "Restaurant" && (
          <CheckIcon color="#59cada" size={22} />
        )}
      </Pressable>
      <Pressable style={styles.cancel} onPress={onCancelBusinessModal}>
        <Text style={styles.cancelText}>cancel</Text>
      </Pressable>
    </View>
  );
}

export default BusinessSelectModal;
