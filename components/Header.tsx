import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { images } from "./images";

const Header = () => {
  const headerData = [
    {
      icon: images.trophy,
      value: "307K",
      border: Colors.any.borderGreen,
      textColor: Colors.any.green,
    },
    {
      icon: images.drop,
      value: "15",
      border: Colors.any.borderRed,
      textColor: Colors.any.red,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TabBarIcon name={"menu"} size={32} color={Colors.any.grey} />
        {headerData.map((item, index) => (
          <View key={index} style={[styles.item, { borderColor: item.border }]}>
            <Image source={[item.icon]} style={styles.image} />
            <Text style={[styles.value, { color: item.textColor }]}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.rightContainer}>
        <TabBarIcon name={"notifications"} size={26} color={Colors.any.grey} />
        <Image source={images.profileIcon} style={{ width: 30, height: 30 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 8,
  },
  value: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
});

export default Header;
