import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TxtNormal } from '@/components/text/TxtNormal';
import { typography } from '@/theme';
import { starIcon } from '@/assets';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Rating = ({ title = '', style = {} }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={starIcon} style={styles.star} />
      <TxtNormal title={title} style={styles.title} />
    </View>
  );
};

export default Rating;

export const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  star: { height: 15, width: 15 },
  title: { ...typography.mulishRegular, color: '#9C9C9C', marginLeft: 5},
});
