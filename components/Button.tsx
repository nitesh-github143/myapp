import { Colors } from "@/constants/Colors";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import Loader from "./Loader";

interface SolidButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<SolidButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#002F28",
  textColor = "#FFFFFF",
  loading,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: loading ? "#A9A9A9" : backgroundColor },
        style,
      ]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {loading ? "Getting new Fact" : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
