import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Button from "./Button";
import { Colors } from "@/constants/Colors";

interface CatFactCardProps {
  fact: string;
}

const CatFactCard: React.FC<CatFactCardProps> = ({ fact }) => {
  return (
    <View>
      <Text style={styles.title}>🐾 Cat Fact</Text>
      <Text style={styles.factText}>{fact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#002F28",
  },
  factText: {
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
    height: 150,
  },
  button: {
    backgroundColor: "#FF69B4",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default CatFactCard;
