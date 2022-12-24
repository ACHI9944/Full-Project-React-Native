import { Pressable, Text, View } from "react-native";
import CheckIcon from "../../../ui/CheckIcon";
import CurrencySelectModalStyle from "./CurrencySelectModalStyle";

const styles = CurrencySelectModalStyle;

function CurrencySelectModal({
  onsetCurrencyModal,
  currencyModal,
  onCancelCurModal,
}) {
  return (
    <View style={styles.modal}>
      <Text style={styles.header}>Select Currency</Text>
      <Pressable
        style={styles.select}
        onPress={onsetCurrencyModal.bind(this, "USD")}
      >
        <Text
          style={[
            styles.selectText,
            currencyModal === "USD" ? { color: "#59cada" } : null,
          ]}
        >
          USD
        </Text>
        {currencyModal === "USD" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable
        style={styles.select}
        onPress={onsetCurrencyModal.bind(this, "EUR")}
      >
        <Text
          style={[
            styles.selectText,
            currencyModal === "EUR" ? { color: "#59cada" } : null,
          ]}
        >
          EUR
        </Text>
        {currencyModal === "EUR" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable
        style={styles.select}
        onPress={onsetCurrencyModal.bind(this, "GEL")}
      >
        <Text
          style={[
            styles.selectText,
            currencyModal === "GEL" ? { color: "#59cada" } : null,
          ]}
        >
          GEL
        </Text>
        {currencyModal === "GEL" && <CheckIcon color="#59cada" size={22} />}
      </Pressable>
      <Pressable style={styles.cancel} onPress={onCancelCurModal}>
        <Text style={styles.cancelText}>cancel</Text>
      </Pressable>
    </View>
  );
}

export default CurrencySelectModal;
