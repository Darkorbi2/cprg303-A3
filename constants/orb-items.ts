import { ImageSourcePropType } from 'react-native';

export type OrbShopItem = {
  title: string;
  cost: number;
  image: ImageSourcePropType;
};

export const ORB_SHOP_ITEMS: OrbShopItem[] = [
  {
    title: "3-Day Nitro Credit",
    cost: 1400,
    image: require('../assets/images/nitro-credit.png'),
  },
  {
    title: "Orbs Apprentice Badge",
    cost: 120,
    image: require('../assets/images/apprentice-badge.png'),
  },
  {
    title: "Infinite Swirl Bundle",
    cost: 8900,
    image: require('../assets/images/discord-swirl.png'),
  },
  {
    title: "Magic Mists",
    cost: 3500,
    image: require('../assets/images/discord-mist.png'),
  },
  {
    title: "Infinite Swirl",
    cost: 3500,
    image: require('../assets/images/discord-swirl.png'),
  },
  {
    title: "Pondering Portal",
    cost: 120,
    image: require('../assets/images/discord-portal.png'),
  },
];
