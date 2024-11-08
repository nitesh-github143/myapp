import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";

import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState<"Physical" | "Digital">(
    "Physical"
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.background}>
        <View style={styles.bottomSection}>
          <View style={styles.bottomTab}>
            <View>
              <ThemedText
                onPress={() => setSelectedTab("Physical")}
                style={{
                  color: Colors.any.textGrey,
                  fontWeight: selectedTab === "Physical" ? 700 : 500,
                }}
              >
                Physical
              </ThemedText>
              {selectedTab === "Physical" && <View style={styles.underline} />}
            </View>
            <View>
              <ThemedText
                onPress={() => setSelectedTab("Digital")}
                style={{
                  color: Colors.any.textGrey,
                  fontWeight: selectedTab === "Digital" ? 700 : 500,
                }}
              >
                Digital
              </ThemedText>
              {selectedTab === "Digital" && <View style={styles.underline} />}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: Colors.any.borderGreen,
  },
  bottomSection: {
    backgroundColor: "rgba(229, 229, 223, 0.41)",
    width: width,
    height: 350,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
    bottom: 0,
  },
  underline: {
    height: 2,
    backgroundColor: Colors.any.textGrey,
    marginTop: 5,
  },
  bottomTab: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 20,
    marginTop: 10,
  },
});
