import { View, Text, TouchableOpacity, ListRenderItemInfo } from 'react-native';
import React, { FC } from 'react';
import { CardItem } from '../HomeScreeen';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import Dimensions from '../../../theme/Dimensions';
import RightArrow from '../../../assets/icons/RightArrow.svg';

interface FeatureCardProps extends ListRenderItemInfo<CardItem> {
  navigateToFeatures: () => void;
  iconFill: string;
}
const FeatureCard: FC<FeatureCardProps> = props => {
  const { item, navigateToFeatures, iconFill } = props;
  const MainItemIcon = item.mainIcon;
  const BgImage = item.bgImage;
  return (
    <LinearGradient
      colors={item.cardBg}
      angle={360}
      style={styles.marginHorizontal}
    >
      <View style={styles.cardContainer}>
        <View style={styles.headerView}>
          <View style={styles.itemIconContainer}>
            <MainItemIcon width={Dimensions.n(20)} height={Dimensions.n(20)} />
          </View>
          <TouchableOpacity
            style={styles.arrowView}
            onPress={navigateToFeatures}
          >
            <RightArrow
              width={Dimensions.n(15)}
              height={Dimensions.n(15)}
              fill={iconFill}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsView}>
          <View style={styles.cardDetailsView}>
            <Text style={styles.title}>{item.cardName}</Text>
            <Text style={styles.des}>{item.des}</Text>
          </View>
          <BgImage width={Dimensions.n(60)} height={Dimensions.n(60)} />
        </View>
        <View style={styles.infoView}>
          {item.cardInfo.map((cardItem, index) => (
            <View
              style={[
                styles.infoSection,
                index !== item.cardInfo.length - 1 && styles.borderRIght,
              ]}
              key={index}
            >
              <cardItem.icon
                width={Dimensions.n(24)}
                height={Dimensions.n(24)}
                fill={iconFill}
              />
              <View style={styles.infoDetailView}>
                <Text style={styles.infoValue}>{cardItem.value}</Text>
                <Text style={styles.infoText}>{cardItem.title}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

export default FeatureCard;
