import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  Image,
  StatusBar,
} from "react-native";

import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "@/components/images";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState<"Physical" | "Digital">(
    "Physical"
  );
  const [topSelectedTab, setTopSelectedTab] = useState<"Vitals" | "Bounties">(
    "Vitals"
  );

  const cardStat = [
    {
      icon: images.trophy,
      value: "2.5K",
    },
    {
      icon: images.op,
      value: "500",
    },
  ];

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.any.borderGreen}
      />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.background}>
          <View style={styles.topBar}>
            <View></View>
            <View style={styles.topTab}>
              <View>
                <ThemedText
                  onPress={() => setTopSelectedTab("Vitals")}
                  style={{
                    color: Colors.any.textGrey,
                    backgroundColor:
                      topSelectedTab === "Vitals" ? "#EDEDED" : "#FFF",
                    paddingHorizontal: 15,
                    borderRadius: 20,
                  }}
                >
                  Vitals
                </ThemedText>
              </View>
              <View>
                <ThemedText
                  onPress={() => setTopSelectedTab("Bounties")}
                  style={{
                    color: Colors.any.textGrey,
                    backgroundColor:
                      topSelectedTab === "Bounties" ? "#EDEDED" : "#FFF",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                >
                  Bonties
                </ThemedText>
              </View>
            </View>
            <View style={styles.filter}>
              <Image
                source={images.filter}
                style={[styles.image, { marginTop: 5 }]}
              />
            </View>
          </View>
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
                {selectedTab === "Physical" && (
                  <View style={styles.underline} />
                )}
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
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              data={[1, 2, 3]}
              keyExtractor={(item) => item.toString()}
              renderItem={() => (
                <View style={{ width: width, marginTop: 20 }}>
                  <LinearGradient
                    colors={["#E8F2EB", "#C0D4C7"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradientBorder}
                  >
                    <View style={styles.innerBox}>
                      <ThemedText
                        onPress={() => setSelectedTab("Digital")}
                        type="title"
                        style={{ marginBottom: 15 }}
                      >
                        Design Bounty
                      </ThemedText>
                      <ThemedText
                        onPress={() => setSelectedTab("Digital")}
                        type="description"
                        style={{ marginBottom: 15 }}
                      >
                        Co-Design a Solarpunk Tuk Tuk in India with climate
                        nomads.Co-Design a Solarpunk Tuk Tuk in India with
                        climate nomads.
                      </ThemedText>
                      <View style={{ flexDirection: "row", marginBottom: 15 }}>
                        {cardStat.map((item, index) => (
                          <View key={index} style={[styles.item]}>
                            <Image source={item.icon} style={styles.image} />
                            <ThemedText
                              style={[styles.value, { color: "#1F6751" }]}
                            >
                              {item.value}
                            </ThemedText>
                          </View>
                        ))}
                      </View>
                      <ThemedText type="subtitle" style={{ marginBottom: 5 }}>
                        Backed by
                      </ThemedText>
                      <View style={styles.cardBottom}>
                        <View style={styles.tag}>
                          <Image
                            source={images.logo}
                            style={[styles.image, { borderRadius: 15 }]}
                          />
                          <ThemedText type="tag" style={{ color: "#002F28" }}>
                            Superteam DAO
                          </ThemedText>
                        </View>
                        <ThemedText type="link">expires in 2d 15H</ThemedText>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.any.white,
    paddingTop: 5,
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
  topBar: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  filter: {
    backgroundColor: Colors.any.white,
    height: 40,
    width: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E7E7E7",
  },
  underline: {
    height: 2,
    backgroundColor: Colors.any.textGrey,
    marginTop: 5,
  },
  topTab: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 20,
    marginTop: 10,
    backgroundColor: Colors.any.white,
    padding: 5,
    borderRadius: 30,
  },
  bottomTab: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 20,
    marginTop: 10,
  },
  gradientBorder: {
    padding: 1,
    borderRadius: 15,
    width: width * 0.95,
    alignSelf: "center",
    marginTop: 10,
  },
  innerBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 20,
    gap: 2,
    marginRight: 15,
  },
  value: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 28,
    letterSpacing: 0.15,
    color: "#333",
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
