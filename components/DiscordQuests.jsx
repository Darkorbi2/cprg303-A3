import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WUWA_BG       = require('../assets/images/wuwa_banner.png');
const WUWA_ICON     = require('../assets/images/wuwa_icon.png');
const OPERA_BG      = require('../assets/images/opera_banner.png');
const OPERA_ICON    = require('../assets/images/opera_icon.png');
const GROUNDED_BG   = require('../assets/images/grounded_banner.png');
const GROUNDED_ICON = require('../assets/images/grounded_icon.png');

const DARK = {
  safe:          '#1a1b1e',
  nav:           '#1a1b1e',
  navTitle:      '#ffffff',
  backArrow:     '#ffffff',
  circleColor:   '#ffffff',
  balanceBg:     '#2a2b35',
  balanceBorder: '#3a3b4a',
  balanceText:   '#ffffff',
  card:          '#23242a',
  promoterText:  '#b9bbbe',
  promoterName:  '#ffffff',
  endsText:      '#b9bbbe',
  questTitle:    '#ffffff',
  questDesc:     '#b9bbbe',
  moreBtn:       '#2e2f38',
  moreBtnText:   '#b9bbbe',
  toggleBg:      '#2e2f38',
};

const LIGHT = {
  safe:          '#f2f3f5',
  nav:           '#ffffff',
  navTitle:      '#060607',
  backArrow:     '#060607',
  circleColor:   '#060607',
  balanceBg:     '#e3e5e8',
  balanceBorder: '#d4d7dc',
  balanceText:   '#060607',
  card:          '#ffffff',
  promoterText:  '#4e5058',
  promoterName:  '#060607',
  endsText:      '#4e5058',
  questTitle:    '#060607',
  questDesc:     '#4e5058',
  moreBtn:       '#e3e5e8',
  moreBtnText:   '#4e5058',
  toggleBg:      '#e3e5e8',
};

function OrbIcon({ size = 14, color }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, borderWidth: 1.3, borderColor: color, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: size * 0.43, height: size * 0.43, borderRadius: size, backgroundColor: color }} />
    </View>
  );
}

function QuestCard({ theme, bannerImage, iconImage, promoter, verified = true, ends, tagColor, tag, title, description, buttonLabel }) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={styles.bannerWrap}>
        <Image source={bannerImage} style={styles.bannerImage} resizeMode="cover" />
      </View>
      <View style={styles.promoterRow}>
        <Text style={[styles.promoterText, { color: theme.promoterText }]}>Promoted by </Text>
        {verified && (
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedCheck}>✓</Text>
          </View>
        )}
        <Text style={[styles.promoterName, { color: theme.promoterName }]}>{promoter}</Text>
        <Text style={[styles.endsText, { color: theme.endsText }]}>Ends {ends}</Text>
      </View>
      <View style={styles.questRow}>
        <Image source={iconImage} style={styles.questIcon} resizeMode="cover" />
        <View style={styles.questText}>
          <Text style={[styles.questTag, { color: tagColor }]}>{tag}</Text>
          <Text style={[styles.questTitle, { color: theme.questTitle }]}>{title}</Text>
          <Text style={[styles.questDesc, { color: theme.questDesc }]}>{description}</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.acceptBtn} activeOpacity={0.8}>
          <Text style={styles.acceptBtnText}>{buttonLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.moreBtn, { backgroundColor: theme.moreBtn }]} activeOpacity={0.8}>
          <Text style={[styles.moreBtnText, { color: theme.moreBtnText }]}>•••</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function DiscordQuests() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? DARK : LIGHT;

  return (
    <View style={[styles.safe, { backgroundColor: theme.safe }]}>

      {/* Top Nav */}
      <View style={[styles.topNav, { backgroundColor: theme.nav }]}>
        <View style={styles.navLeft}>
          <TouchableOpacity>
            <Text style={[styles.backArrow, { color: theme.backArrow }]}>←</Text>
          </TouchableOpacity>
          <View style={styles.questNavIcon}>
            <View style={[styles.questCircle1, { borderColor: theme.circleColor }]} />
            <View style={[styles.questCircle2, { borderColor: theme.circleColor }]} />
          </View>
          <Text style={[styles.navTitle, { color: theme.navTitle }]}>Quests</Text>
        </View>
        <View style={styles.navRight}>
          <View style={[styles.orbBalance, { backgroundColor: theme.balanceBg, borderColor: theme.balanceBorder }]}>
            <OrbIcon size={16} color={theme.balanceText} />
            <Text style={[styles.orbBalanceText, { color: theme.balanceText }]}>700</Text>
          </View>
          <TouchableOpacity
            style={[styles.toggleBtn, { backgroundColor: theme.toggleBg }]}
            onPress={() => setIsDark(!isDark)}
            activeOpacity={0.8}
          >
            <Text style={{ fontSize: 16 }}>{isDark ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: theme.safe }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <QuestCard
          theme={theme}
          bannerImage={WUWA_BG}
          iconImage={WUWA_ICON}
          promoter="Kuro Games"
          ends="2/11"
          tagColor="#7c6af7"
          tag="V3.1 WUWA QUEST"
          title="Claim a V3.1 WUWA Quest Pack"
          description="Play Wuthering Waves for 15 minutes and win a V3.1 WUWA Quest Pack."
          buttonLabel="Accept Quest"
        />
        <QuestCard
          theme={theme}
          bannerImage={OPERA_BG}
          iconImage={OPERA_ICON}
          promoter="Opera GX"
          ends="2/14"
          tagColor="#7c6af7"
          tag="OPERA GX VALENTINE'S DAY QUEST"
          title="Claim ⊙ 700 Discord Orbs"
          description="Watch the video to win 700 Orbs!"
          buttonLabel="Start Video Quest"
        />
        <QuestCard
          theme={theme}
          bannerImage={GROUNDED_BG}
          iconImage={GROUNDED_ICON}
          promoter="Obsidian Entertainment"
          ends="2/14"
          tagColor="#7c6af7"
          tag="TOXIC AND TANGLED QUEST"
          title="Claim ⊙ 700 Discord Orbs"
          description="Play Grounded 2 for 15 minutes and win..."
          buttonLabel="Accept Quest"
        />
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },

  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backArrow: { fontSize: 22 },
  questNavIcon: {
    width: 26,
    height: 26,
    position: 'relative',
  },
  questCircle1: {
    position: 'absolute',
    left: 0,
    top: 3,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
  },
  questCircle2: {
    position: 'absolute',
    right: 0,
    top: 3,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
  },
  navTitle: {
    fontWeight: '700',
    fontSize: 17,
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  orbBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  orbBalanceText: {
    fontWeight: '700',
    fontSize: 15,
  },
  toggleBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 4,
    gap: 12,
  },

  card: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  bannerWrap: {
    height: 130,
    width: '100%',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  promoterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 4,
  },
  promoterText: { fontSize: 13 },
  verifiedBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#3ba55d',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  verifiedCheck: {
    color: 'white',
    fontSize: 9,
    fontWeight: '900',
  },
  promoterName: {
    fontWeight: '600',
    fontSize: 13,
    flex: 1,
  },
  endsText: { fontSize: 12 },

  questRow: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 12,
    alignItems: 'flex-start',
  },
  questIcon: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#111',
  },
  questText: {
    flex: 1,
    gap: 2,
  },
  questTag: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  questTitle: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
  },
  questDesc: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },

  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingBottom: 14,
    gap: 10,
  },
  acceptBtn: {
    flex: 1,
    backgroundColor: '#5865f2',
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
  },
  acceptBtnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  moreBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreBtnText: {
    fontSize: 13,
    letterSpacing: 1,
  },
});
