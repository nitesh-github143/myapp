import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
  Dimensions,
  View,
  Alert,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import CatFactCard from "@/components/Card";
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import CustomInput from "@/components/CustomInputBox";

interface CatFact {
  fact: string;
  length: number;
}

interface SetterFunc<T> {
  (value: T | ((prevValue: T) => T)): void;
}

interface LoaderSetterFunc {
  (isLoading: boolean | ((prevState: boolean) => boolean)): void;
}

const { width } = Dimensions.get("window");

export default function TabTwoScreen() {
  const [fact, setFact] = useState<CatFact>({ fact: "", length: 0 });
  const [userInfo, setUserInfo] = useState(null);
  const [text, setText] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  async function get<T>(
    url: string,
    setterFunc: SetterFunc<T>,
    loaderSetter: LoaderSetterFunc
  ) {
    try {
      loaderSetter(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setterFunc(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    } finally {
      loaderSetter(false);
    }
  }

  useEffect(() => {
    const data = get("https://catfact.ninja/fact", setFact, setLoading1);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <CatFactCard fact={fact.fact} />
        <Button
          title="Get Fact"
          onPress={() =>
            get("https://catfact.ninja/fact", setFact, setLoading1)
          }
          loading={loading1}
          style={styles.btn}
        />
      </View>
      <View style={styles.card}>
        <CustomInput
          placeholder="Enter name here ..."
          value={text}
          onChangeText={setText}
          onFocus={() => setUserInfo(null)}
        />
        {userInfo ? (
          <View>
            {userInfo != null && (
              <>
                <ThemedText type="title">Hello, {userInfo.name}!</ThemedText>
                <ThemedText type="title">
                  Your Predicted Gender is , {userInfo.gender}!
                </ThemedText>
                <ThemedText type="title">
                  Your Predicted Gender probability , {userInfo.probability}!
                </ThemedText>
              </>
            )}
          </View>
        ) : null}
        <Button
          title="Get Fact"
          onPress={() => {
            if (text.trim() === "") {
              Alert.alert("Please fill the name");
              return;
            }
            get(
              `https://api.genderize.io/?name=${text}`,
              setUserInfo,
              setLoading2
            );
          }}
          loading={loading2}
          style={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    margin: 10,
    width: 200,
    alignSelf: "center",
  },
  card: {
    backgroundColor: Colors.any.borderGreen,
    borderRadius: 12,
    padding: 16,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
});
