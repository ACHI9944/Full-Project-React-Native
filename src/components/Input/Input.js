import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import InputStyle from "./InputStyle";

const styles = InputStyle;

function Input({ control, name, rules = {}, placeholder, keyboardType }) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={[styles.input, error && styles.errorInput]}>
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              style={styles.textInput}
              keyboardType={keyboardType}
            />
          </View>
          <View style={styles.errorMessageView}>
            {error && (
              <Text style={styles.errorMessage}>
                {error.message || "Error"}
              </Text>
            )}
          </View>
        </>
      )}
    />
  );
}

export default Input;
