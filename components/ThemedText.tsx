import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "description"
    | "tag";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "description" ? styles.description : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    color: "#002F28",
    fontWeight: 600,
    fontSize: 16,
  },
  description: {
    color: " #125742",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 24,
    color: "#626262",
  },
  tag: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 28,
    color: "#002F28",
  },
  link: {
    lineHeight: 16,
    fontStyle: "italic",
    fontSize: 10,

    color: "#D26A00",
  },
});
