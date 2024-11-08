import React, { useState } from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  inputFocused: {
    borderColor: "#00bfff",
    shadowColor: "#00bfff",
    shadowOpacity: 0.3,
  },
  input: {
    fontSize: 16,
    color: "#333",
  },
});

export default CustomInput;
