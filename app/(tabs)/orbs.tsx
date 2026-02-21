import { OrbShopCard } from "@/components/orb-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ORB_SHOP_ITEMS } from "@/constants/orb-items";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";

let bgColor;
let containerbgColor;
let bgSecondaryColor;
let textColor;

export default function Orbs() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  bgColor = colorScheme === "dark" ? "#1C1D22" : "#f2f3f5";
  containerbgColor = colorScheme === "dark" ? "#27272F" : "#ffffff";
  bgSecondaryColor = colorScheme === "dark" ? "#121212" : "#f2f3f5";
  textColor = colorScheme === "dark" ? "#C7C8CD" : "#060607";
  const styles = createStyles(
    bgColor,
    bgSecondaryColor,
    textColor,
    containerbgColor,
  );
  return (
    <ThemedView style={{ flex: 1, backgroundColor: bgColor }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.backHeader}>
          <ThemedView
            style={[styles.orbsLeft, { backgroundColor: bgSecondaryColor }]}
          >
            <Pressable onPress={() => router.back()}>
              <AntDesign name="arrow-left" size={24} color={textColor} />
            </Pressable>

            <ThemedText style={styles.orbsText}>Orbs Exclusives</ThemedText>
          </ThemedView>
        </ThemedView>
        {/* banner picture  */}
        <ThemedView style={styles.Banner}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d",
            }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <ThemedView style={styles.bannerOverlay}>
            <ThemedText style={styles.bannerTitle}>DISCORD ORBS</ThemedText>
            <ThemedText style={styles.bannerSubtitle}>
              Earn through Quests. Spend in the Shop.
            </ThemedText>
            <ThemedView style={styles.earnOrbsContainer}>
              <ThemedText style={styles.orbsText}>Earn Orbs</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.cardsLayout}>
          {ORB_SHOP_ITEMS.map((item, index) => (
            <OrbShopCard
              key={index}
              title={item.title}
              cost={item.cost}
              image={item.image}
            />
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const createStyles = (
  bgColor: string,
  bgSecondaryColor: string,
  textColor: string,
  containerbgColor: string,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: bgColor,
    },
    containerContent: {
      alignItems: "stretch",
    },
    backHeader: {
      height: "6%",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: bgSecondaryColor,
      flexDirection: "row",
      paddingHorizontal: 16,
    },
    orbsLeft: {
      backgroundColor: bgSecondaryColor,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    Banner: {
      height: 200,
      width: "100%",
      backgroundColor: bgColor,
    },

    bannerImage: {
      width: "100%",
      height: "100%",
    },
    bannerOverlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      padding: 16,
      backgroundColor: "transparent",
      justifyContent: "center",
    },
    bannerTitle: {
      color: textColor,
      fontSize: 28,
      fontWeight: "900",
      textTransform: "uppercase",
    },
    bannerSubtitle: {
      color: textColor,
      fontSize: 14,
      marginTop: 4,
    },
    earnOrbsContainer: {
      backgroundColor: containerbgColor,
      marginTop: 18,
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 25,
      alignSelf: "flex-start",
    },
    orbsText: {
      color: textColor,
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
      paddingVertical: 4,
    },
    cardsLayout: {
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "transparent",
      justifyContent: "center",
      paddingHorizontal: 8,
    },
  });
