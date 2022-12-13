import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import InputStyle from "./InputStyle";

const styles = InputStyle;

function Input({
  control,
  name,
  rules = {},
  placeholder,
  keyboardType,
  isValid,
  defaultValue = "",
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { isDirty },
      }) => (
        <>
          <View
            style={[
              styles.input,
              !isValid && isDirty
                ? styles.errorInput
                : isValid && isDirty
                ? styles.correctInput
                : null,
            ]}
          >
            {value && <Text style={styles.innerText}>{placeholder}</Text>}
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              style={styles.textInput}
              keyboardType={keyboardType}
              defaultValue={defaultValue}
            />
          </View>
        </>
      )}
    />
  );
}

export default Input;
