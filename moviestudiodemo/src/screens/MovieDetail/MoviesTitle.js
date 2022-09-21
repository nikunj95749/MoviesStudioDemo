import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TxtBold } from '@/components/text/TxtBold';
import { typography } from '@/theme';
import { RFPercentage } from 'react-native-responsive-fontsize';

const MoviesTitle = ({ title = '', style = {} }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <TxtBold title={title} style={styles.title} />
    </View>
  );
};

export default MoviesTitle;

export const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
  },
  title:{ ...typography.mulishSemiBold, fontSize: RFPercentage(3.5),}
});
