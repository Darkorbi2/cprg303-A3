import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useColorScheme } from "@/hooks/use-color-scheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

let bgColor;
let containerbgColor;
let textColor;

export default function Settings() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  bgColor = colorScheme === "dark" ? "#1C1D22" : "#f2f3f5";
  containerbgColor = colorScheme === "dark" ? "#27272F" : "#ffffff";
  textColor = colorScheme === "dark" ? "#C7C8CD" : "#060607";
  const styles = createStyles(bgColor, textColor, containerbgColor);
  return (
    // big container including the bg
    <SafeAreaView style={styles.mainContainer}>
      {/* header */}
      <ThemedView style={styles.header}>
        <ThemedView style={[styles.settingLeft, { backgroundColor: bgColor }]}>
          <Pressable onPress={() => router.back()}>
            <AntDesign name="arrow-left" size={24} color={textColor} />
          </Pressable>

          <ThemedView style={styles.settingsTextContainer}>
            <ThemedText style={styles.settingsText}>Settings</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.divider}></ThemedView>

      {/* Search Bar */}
      <ThemedView style={styles.searchBar}>
        <ThemedView style={styles.settingLeft}>
          <FontAwesome6 name="magnifying-glass" size={24} color={textColor} />
          <ThemedText>Search</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Account Settings */}
      <ThemedView style={styles.containerTitle}>
        <ThemedText style={styles.subtitle}>Account Settings</ThemedText>
      </ThemedView>
      <ThemedView style={styles.settingsContainer}>
        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <FontAwesome
              name={colorScheme === "dark" ? "user-circle-o" : "user-circle"}
              size={24}
              color={textColor}
            />
            <ThemedText style={styles.settingName}>Account</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <FontAwesome6 name="person-falling" size={24} color={textColor} />
            <ThemedText style={styles.settingName}>Content & Social</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <FontAwesome name={"lock"} size={24} color={textColor} />
            <ThemedText style={styles.settingName}>Data & Privacy</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <Ionicons name={"people"} size={24} color={textColor} />
            <ThemedText style={styles.settingName}>Family Center</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <Feather name="key" size={24} color={textColor} />
            <ThemedText numberOfLines={1} style={styles.settingName}>
              Authorized Apps
            </ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <MaterialIcons name="devices" size={24} color={textColor} />
            <ThemedText style={styles.settingName}>Devices</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <Ionicons name="extension-puzzle" size={24} color={textColor} />
            <ThemedText style={styles.settingName}>Connections</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="movie-open"
              size={24}
              color={textColor}
            />
            <ThemedText style={styles.settingName}>Clips</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />

        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color={textColor}
            />
            <ThemedText style={styles.settingName}>Scab QR Code</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.divider} />
      </ThemedView>

      {/* BIlling settings */}
      <ThemedView style={styles.containerTitle}>
        <ThemedText style={styles.subtitle}>Billing Settings</ThemedText>
      </ThemedView>
      <ThemedView style={styles.settingsContainer}>
        <ThemedView style={styles.settingItem}>
          <ThemedView style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="storefront"
              size={24}
              color={textColor}
            />
            <ThemedText style={styles.settingName}>Shop</ThemedText>
          </ThemedView>
          <ThemedText style={{ color: textColor, fontSize: 24 }}>
            {">"}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}
const createStyles = (
  bgColor: string,
  textColor: string,
  containerbgColor: string,
) =>
  StyleSheet.create({
    settingsContainer: {
      width: "90%",
      borderRadius: 20,
      backgroundColor: containerbgColor,
      padding: 20,
      margin: 10,
    },

    backArrowContainer: {
      flex: 1,
      paddingLeft: "5%",
      height: "100%",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: bgColor,
    },

    containerTitle: {
      width: "90%",
      height: "2.5%",
      justifyContent: "center",
      backgroundColor: bgColor,
    },

    divider: {
      width: "100%",
      backgroundColor: textColor,
      height: 1,
      margin: "1%",
    },

    header: {
      width: "90%",
      height: "5%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bgColor,
      flexDirection: "row",
    },

    mainContainer: {
      flex: 1,
      height: "100%",
      backgroundColor: bgColor,
      alignItems: "center",
    },

    searchBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 15,
      backgroundColor: containerbgColor,
      height: "5%",
      width: "90%",
      borderRadius: 20,
      padding: 10,
    },

    settingItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 15,
      backgroundColor: containerbgColor,
    },

    settingLeft: {
      backgroundColor: containerbgColor,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    settingName: {
      color: textColor,
      backgroundColor: containerbgColor,
      fontSize: 16,
      fontWeight: "600",
    },

    settingsText: {
      color: textColor,
      backgroundColor: bgColor,
      fontSize: 24,
      fontWeight: 400,
      height: "100%",
      paddingTop: "5%",
    },

    settingsTextContainer: {
      flex: 1,
      height: "100%",
      backgroundColor: bgColor,
      alignItems: "center",
      paddingRight: "7.5%",
      marginBottom: "5%",
    },

    subtitle: {
      color: textColor,
      fontSize: 18,
      fontWeight: 600,
    },
  });
