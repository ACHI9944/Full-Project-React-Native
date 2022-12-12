import { Controller } from "react-hook-form";
import { TextInput, View } from "react-native";
import InputStyle from "./InputStyle";

const styles = InputStyle;

function Input({
  control,
  name,
  rules = {},
  placeholder,
  keyboardType,
  isValid,
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { isDirty, isTouched },
      }) => (
        <>
          <View
            style={[
              styles.input,
              !isValid && isDirty && isTouched
                ? styles.errorInput
                : isValid && isDirty && isTouched
                ? styles.correctInput
                : null,
            ]}
          >
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              style={styles.textInput}
              keyboardType={keyboardType}
            />
          </View>
        </>
      )}
    />
  );
}

export default Input;
