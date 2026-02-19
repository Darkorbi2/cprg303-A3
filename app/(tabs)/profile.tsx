import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image, Pressable, ScrollView } from "react-native";

// All icons used were ascii alt codes from:
// https://www.alt-codes.net/
// https://graphemica.com/

export default function Profile() {
  return (
    <ThemedView style={{ flex: 1 }}>
      {/* scrollable component that wraps everything */}
      {/* https://reactnative.dev/docs/ScrollView */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        showsVerticalScrollIndicator={false}
      >
        {/* banner picture  */}
        <ThemedView style={styles.Banner}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/banners/356606310503940098/a_f16147d6886193e980601ec311b2c11b.png?size=480",
            }}
            style={styles.bannerImage}
          />
        </ThemedView>

        {/* circle that holds the profile picture */}
        <ThemedView style={styles.avatarWrapper}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/avatars/356606310503940098/0cbb01f3e5617caf62c9d132a2beb755.webp?size=128",
            }}
            style={styles.avatar}
          />
        </ThemedView>

        {/* container for header name and badges */}
        <ThemedView style={styles.profileHeader}>
          <ThemedView style={styles.headerContainer}>
            <ThemedText style={styles.name}>~misa</ThemedText>

            {/* //https://graphemica.com/%E2%8C%84 */}
            <ThemedText style={styles.dropDown}>⌄</ThemedText>
          </ThemedView>
          <ThemedView style={styles.subHeaderContainer}>
            <ThemedText style={styles.subHeaderText}>kkissed</ThemedText>
            <ThemedView style={styles.badgeContainer}>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>🐱 meow</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedView style={styles.badgeContainer}>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>🦖</ThemedText>
              </ThemedView>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>🐧</ThemedText>
              </ThemedView>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>🐙</ThemedText>
              </ThemedView>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>🦠</ThemedText>
              </ThemedView>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>🐳</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* edit profile box */}
        <ThemedView style={styles.editProfile}>
          <ThemedText style={styles.subtitle}>✎ Edit Profile</ThemedText>
        </ThemedView>

        {/* Orbs balance box */}
        <ThemedView style={styles.orbsBar}>
          <ThemedText style={styles.subtitle}>Orbs Balance</ThemedText>
          <ThemedView style={styles.orbsAmount}>
            <ThemedText style={styles.orbsIcon}> &#10023;</ThemedText>
            <ThemedText style={styles.orbsText}>700</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* About me box */}
        <ThemedView style={styles.aboutMe}>
          <ThemedView style={styles.subContainer}>
            <ThemedText style={styles.subtitle}>About Me</ThemedText>
            <ThemedText style={styles.subText}>kith</ThemedText>
          </ThemedView>
          <ThemedView style={styles.subContainer}>
            <ThemedText style={styles.subtitle}>Member Since</ThemedText>
            <ThemedText style={styles.subText}>
              &#x2665; Sep 10, 2017
            </ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Connections box */}
        <ThemedView style={styles.connections}>
          <ThemedText style={styles.subtitle}>Connections</ThemedText>
          <ThemedView style={styles.connectionItem}>
            <ThemedView style={styles.connectionLeft}>
              <ThemedText style={styles.appIcon}>&#9803;</ThemedText>
              <ThemedText style={styles.connectionName}>TerraGirl14</ThemedText>
              <ThemedView style={styles.verifiedBadge}>
                <ThemedText style={styles.verifiedText}>✔</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedText style={styles.arrow}>↗</ThemedText>
          </ThemedView>

          <ThemedView style={styles.divider} />

          {/* Connection item */}
          <ThemedView style={styles.connectionItem}>
            <ThemedView style={styles.connectionLeft}>
              <ThemedText style={styles.appIcon}>&#9801;</ThemedText>
              <ThemedText style={styles.connectionName}>neen</ThemedText>
              <ThemedView style={styles.verifiedBadge}>
                <ThemedText style={styles.verifiedText}>✔</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedText style={styles.arrow}>↗</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Navigation bar */}
        <ThemedView style={styles.navigationBar}>
          <ThemedView style={styles.navigationItem}>
            <ThemedText style={styles.navigationText}>Home</ThemedText>
          </ThemedView>
          <ThemedView style={styles.navigationItem}>
            <Pressable onPress={() => alert("Alert Button pressed")}>
              <ThemedText style={styles.navigationText}>Alert</ThemedText>
            </Pressable>
          </ThemedView>
          <ThemedView style={styles.navigationItem}>
            <ThemedText style={styles.navigationText}>Avatar</ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Banner: {
    height: 180,
    width: "100%",
    marginBottom: 18,
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },

  avatarWrapper: {
    position: "absolute",
    top: 120,
    left: 25,
    zIndex: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#161415",
    backgroundColor: "#333",
  },

  alertButton: {
    borderRadius: 15,
    backgroundColor: "#b22222",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  card: {
    borderWidth: 2,
    borderRadius: 14,
    padding: 16,
    gap: 2,
  },

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#161415",
  },

  containerContent: {
    alignItems: "center",
  },

  subContainer: {
    gap: 8,
  },

  subtitle: {
    color: "#fefefe",
    fontSize: 18,
    fontWeight: 600,
  },

  subText: {
    color: "#fefefe",
    fontSize: 16,
  },

  editProfile: {
    height: "5%",
    width: "90%",
    borderRadius: 25,
    backgroundColor: "#67666B",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  orbsBar: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#0A0A0A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 10,
  },

  orbsAmount: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 25,
  },

  orbsText: {
    color: "#fefefe",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 5,
  },
  orbsIcon: {
    color: "#fefefe",
    fontSize: 25,
    fontWeight: "600",
  },

  aboutMe: {
    gap: 25,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#0A0A0A",
    padding: 20,
    margin: 10,
  },

  connections: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#0A0A0A",
    padding: 20,
    margin: 10,
  },

  connectionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 18,
  },

  connectionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  connectionName: {
    color: "#fefefe",
    fontSize: 16,
    fontWeight: "600",
  },

  verifiedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
  },

  verifiedText: {
    color: "#1E1E1E",
    fontSize: 10,
    fontWeight: "600",
  },

  arrow: {
    color: "#fefefe",
    fontSize: 20,
  },

  appIcon: {
    fontSize: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#1E1E1E",
    marginLeft: 35,
  },

  profileHeader: {
    width: "90%",
    marginBottom: 12,
    gap: 8,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 25,
  },

  name: {
    color: "#fefefe",
    fontSize: 26,
    fontWeight: "700",
  },

  dropDown: { color: "#bdbdbd", fontSize: 25 },

  subHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subHeaderText: {
    color: "#bdbdbd",
    fontSize: 20,
    fontWeight: "500",
  },

  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#060608",
    borderRadius: 12,
    gap: 2,
  },

  badge: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "#fefefe",
    fontSize: 16,
  },

  navigationBar: {
    marginTop: 50,
    height: 70,
    flexDirection: "row",
  },

  navigationItem: {
    backgroundColor: "#060608",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  navigationText: {
    color: "#fefefe",
    fontSize: 16,
    fontWeight: "600",
  },
});
