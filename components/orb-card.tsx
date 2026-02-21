import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type OrbShopCardProps = {
  title: string;
  cost: number;
  image: ImageSourcePropType;
};

let bgColor;
let containerbgColor;
let textColor;

export function OrbShopCard({ title, cost, image }: OrbShopCardProps) {
  const colorScheme = useColorScheme();
  bgColor = colorScheme === "dark" ? "#1C1D22" : "#f2f3f5";
  containerbgColor = colorScheme === "dark" ? "#27272F" : "#ffffff";
  textColor = colorScheme === "dark" ? "#C7C8CD" : "#060607";
  const styles = createStyles(bgColor, textColor, containerbgColor);

  return (
    <ThemedView style={styles.card}>
      <ThemedView style={styles.imageContainer}>
        <Image source={image} style={styles.cardImage} />
      </ThemedView>
      <ThemedView style={styles.cardFooter}>
        <ThemedText style={styles.cardTitle}>{title}</ThemedText>
        <ThemedView style={styles.costRow}>
          <ThemedText style={styles.orbIcon}>&#10023;</ThemedText>
          <ThemedText style={styles.cardCost}>{cost}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const createStyles = (
  bgColor: string,
  textColor: string,
  containerbgColor: string,
) =>
  StyleSheet.create({
    card: {
      backgroundColor: containerbgColor,
      borderRadius: 12,
      padding: 10,
      width: 185,
      height: 185,
      margin: 8,
      justifyContent: "space-between",
    },
    imageContainer: {
      alignItems: "center",
      backgroundColor: containerbgColor,
      flex: 1,
      justifyContent: "center",
    },
    cardImage: {
      width: 185 * 0.5,
      height: 185 * 0.5,
      borderRadius: 10,
      marginVertical: 10,
    },
    cardFooter: {
      backgroundColor: containerbgColor,
      height: 60,
      justifyContent: "flex-end",
    },
    cardTitle: {
      color: textColor,
      fontSize: 14,
      fontWeight: "700",
      marginBottom: 6,
    },
    costRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      backgroundColor: containerbgColor,
    },
    orbIcon: {
      color: textColor,
      fontSize: 25,
      fontWeight: "600",
    },
    cardCost: {
      color: textColor,
      fontSize: 14,
      fontWeight: "600",
    },
  });
